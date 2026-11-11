import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { approveCaptures } from './approve-review.mjs';

const hash = bytes => createHash('sha256').update(bytes).digest('hex');
function fixture(t, change = () => {}) {
  const frontend = mkdtempSync(path.join(tmpdir(), 'visual-approval-test-'));
  t.after(() => rmSync(frontend, { recursive: true, force: true }));
  const files = {};
  const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+j8U0AAAAASUVORK5CYII=', 'base64');
  for (const project of ['mobile-390', 'tablet-768', 'desktop-1440', 'desktop-1920']) {
    for (const name of ['home', 'sobre', 'stack', 'projetos', 'trajetoria', 'contato', 'menu', 'projetos-gallery']) {
      const file = `${project}/${name}.png`;
      mkdirSync(path.dirname(path.join(frontend, 'visual-review', file)), { recursive: true });
      writeFileSync(path.join(frontend, 'visual-review', file), png);
      files[file] = hash(png);
    }
  }
  const manifest = { environment: 'linux-x64', playwright: '1.65.0', files };
  change(manifest);
  const json = JSON.stringify(manifest);
  writeFileSync(path.join(frontend, 'visual-review/manifest.json'), json);
  return { frontend, version: '1.65.0', args: ['--approved', hash(json)], ci: false };
}
const noBaselines = options => assert.equal(existsSync(path.join(options.frontend, 'tests/visual/baselines')), false);

test('refuses absent explicit approval and incorrect manifest hashes', t => {
  const options = fixture(t);
  assert.throws(() => approveCaptures({ ...options, args: [] }), /--approved/);
  assert.throws(() => approveCaptures({ ...options, args: ['--approved', 'wrong'] }), /--approved/);
  noBaselines(options);
});
test('refuses CI promotion even with a valid review hash', t => {
  const options = fixture(t);
  assert.throws(() => approveCaptures({ ...options, ci: true }), /never by CI/);
  noBaselines(options);
});
test('rejects incomplete reviews', t => {
  const options = fixture(t, manifest => { delete manifest.files['mobile-390/home.png']; });
  assert.throws(() => approveCaptures(options), /Incomplete review/);
  noBaselines(options);
});
test('rejects changed images before writing any approved baseline', t => {
  const options = fixture(t);
  writeFileSync(path.join(options.frontend, 'visual-review/tablet-768/home.png'), 'changed after review');
  assert.throws(() => approveCaptures(options), /changed after review/);
  noBaselines(options);
});
test('rejects wrong rendering environment or browser version', t => {
  for (const field of ['environment', 'playwright']) {
    const options = fixture(t, manifest => { manifest[field] = 'wrong'; });
    assert.throws(() => approveCaptures(options), /pinned Linux/);
    noBaselines(options);
  }
});
test('copies only the exact explicitly approved fixture set', t => {
  const options = fixture(t);
  approveCaptures(options);
  const root = path.join(options.frontend, 'tests/visual/baselines');
  const approvals = JSON.parse(readFileSync(path.join(root, 'approvals.json'), 'utf8'));
  assert.equal(Object.keys(approvals.files).length, 32);
  assert.equal(approvals.manifestSha256, options.args[1]);
  for (const [file, checksum] of Object.entries(approvals.files)) assert.equal(hash(readFileSync(path.join(root, file))), checksum);
});
