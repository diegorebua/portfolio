import { spawnSync } from 'node:child_process';
import { approveCaptures } from './approve-review.mjs';
import { readFileSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const frontend = fileURLToPath(new URL('../', import.meta.url));
const packageJson = JSON.parse(readFileSync(path.join(frontend, 'package.json'), 'utf8'));
const version = packageJson.devDependencies['@playwright/test'];
const image = `mcr.microsoft.com/playwright:v${version}-noble`;
const [mode, ...args] = process.argv.slice(2);
const run = (command, arguments_, options = {}) => {
  const result = spawnSync(command, arguments_, { cwd: frontend, stdio: 'inherit', ...options });
  if (result.error) throw result.error;
  process.exitCode = result.status ?? 1;
};

if (mode === 'test' || mode === 'review') {
  if (args.some(arg => arg.startsWith('--update-snapshots'))) throw new Error('Updates require a reviewed manifest. Use visual:review, then visual:approve.');
  if (mode === 'review') {
    // Remove only disposable captures, never the approved baselines.
    rmSync(path.join(frontend, 'visual-review'), { recursive: true, force: true });
    mkdirSync(path.join(frontend, 'visual-review'), { recursive: true });
  }
  run('docker', ['run', '--rm', '--init', '--platform', 'linux/amd64', '--ipc=host',
    '-v', `${frontend}:/workspace/frontend`, '-v', '/workspace/frontend/node_modules',
    '-w', '/workspace/frontend', '-e', `VISUAL_REVIEW=${mode === 'review' ? '1' : '0'}`,
    image, 'sh', '-c', 'npm ci && exec npm run test:visual -- "$@"', '--', ...args]);
} else if (mode === 'approve') {
  approveCaptures({ frontend, version, args });
} else if (mode === 'report') {
  run(process.execPath, [path.join(frontend, 'node_modules/@playwright/test/cli.js'), 'show-report', ...args]);
} else {
  throw new Error('Usage: visual.mjs test|review|approve|report');
}
