import { createHash } from 'node:crypto';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { FullConfig } from '@playwright/test';

export default async function reviewReport(config: FullConfig) {
  if (process.env.VISUAL_REVIEW !== '1') return;
  const root = path.resolve('visual-review');
  const files: Record<string, string> = {};
  for (const project of config.projects) {
    const dir = path.join(root, project.name);
    for (const name of await readdir(dir).catch(() => [] as string[])) {
      if (name.endsWith('.png')) files[`${project.name}/${name}`] = createHash('sha256').update(await readFile(path.join(dir, name))).digest('hex');
    }
  }
  const manifest = {
    status: 'pending-visual-approval',
    environment: `${process.platform}-${process.arch}`,
    playwright: JSON.parse(await readFile('node_modules/@playwright/test/package.json', 'utf8')).version,
    createdAt: new Date().toISOString(), files,
  };
  const json = JSON.stringify(manifest, null, 2) + '\n';
  await writeFile(path.join(root, 'manifest.json'), json);
  const hash = createHash('sha256').update(json).digest('hex');
  const links = Object.keys(files).sort().map(file => `<article><h2>${file}</h2><a href="${file}" target="_blank"><img loading="lazy" src="${file}" alt="${file}"></a></article>`).join('\n');
  await writeFile(path.join(root, 'index.html'), `<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Revisão visual pendente</title><style>body{font:16px system-ui;margin:2rem;background:#eee;color:#222}main{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem}article{min-width:0}img{width:100%;height:auto}code{overflow-wrap:anywhere}</style><h1>Capturas para aprovação visual</h1><p>Estas imagens não são baselines. Revise todas em tamanho original antes de aprovar.</p><p>Manifesto SHA-256: <code>${hash}</code></p><main>${links}</main></html>`);
  console.log(`\nReview only: ${Object.keys(files).length}/32 screenshots. No baselines created.\nOpen frontend/visual-review/index.html\nAfter explicit visual approval: npm run visual:approve -- --approved ${hash}\n`);
}
