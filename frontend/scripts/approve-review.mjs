import { createHash } from 'node:crypto';
import { readFileSync, mkdirSync, copyFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const hash = data => createHash('sha256').update(data).digest('hex');

export function approveCaptures({ frontend, version, args, ci = Boolean(process.env.CI) }) {
  if (ci) throw new Error('Baseline approval must be performed locally after explicitly authorized visual review, never by CI.');
  const review = path.join(frontend, 'visual-review');
  const data = readFileSync(path.join(review, 'manifest.json'));
  if (args.length !== 2 || args[0] !== '--approved' || args[1] !== hash(data)) throw new Error('Provide --approved followed by the exact SHA-256 from the reviewed report.');
  const manifest = JSON.parse(data);
  if (manifest.environment !== 'linux-x64' || manifest.playwright !== version) throw new Error('Review must use the pinned Linux/amd64 Playwright environment.');
  const projects = ['mobile-390', 'tablet-768', 'desktop-1440', 'desktop-1920'];
  const names = ['home.png', 'sobre.png', 'stack.png', 'projetos.png', 'trajetoria.png', 'contato.png', 'menu.png', 'projetos-gallery.png'];
  const expected = projects.flatMap(project => names.map(name => `${project}/${name}`)).sort();
  if (JSON.stringify(Object.keys(manifest.files).sort()) !== JSON.stringify(expected)) throw new Error('Incomplete review: all 32 screenshots must be captured and reviewed.');
  // Validate the entire set before writing anything.
  for (const file of expected) {
    if (hash(readFileSync(path.join(review, file))) !== manifest.files[file]) throw new Error(`Capture changed after review: ${file}`);
  }
  const baselines = path.join(frontend, 'tests/visual/baselines');
  for (const file of expected) {
    mkdirSync(path.dirname(path.join(baselines, file)), { recursive: true });
    copyFileSync(path.join(review, file), path.join(baselines, file));
  }
  writeFileSync(path.join(baselines, 'approvals.json'), JSON.stringify({
    manifestSha256: hash(data), approvedAt: new Date().toISOString(), environment: manifest.environment,
    playwright: version, files: manifest.files,
  }, null, 2) + '\n');
  console.log('Promoted the 32 explicitly approved captures. Review the baseline diff, commit it, then run npm run test:visual.');
}
