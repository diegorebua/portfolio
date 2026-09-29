import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { PROJECTS, SKILLS } from './constants';

const routes = [
  { path: '/', headingId: 'home-title', heading: 'Diego' },
  { path: '/sobre', headingId: 'about-title', heading: 'Prazer, Diego' },
  { path: '/stack', headingId: 'skills-title', heading: 'Minha stack' },
  { path: '/projetos', headingId: 'projects-title', heading: 'Projetos' },
  { path: '/trajetoria', headingId: 'experience-title', heading: 'Trajetória' },
  { path: '/contato', headingId: 'contact-title', heading: 'Vamos conversar' },
];

for (const { path, headingId, heading } of routes) {
  test(`${path} renders its page and navigation`, () => {
    const html = renderToStaticMarkup(<StaticRouter location={path}><App /></StaticRouter>);
    assert.ok(html.includes(`<h1 id="${headingId}"`));
    assert.ok(html.includes(heading));
    assert.ok(html.includes('Navegação principal'));
  });
}

test('portfolio references valid local assets and project links', () => {
  assert.equal(new Set(PROJECTS.map(({ id }) => id)).size, PROJECTS.length);

  const assets = [
    ...PROJECTS.flatMap(({ image, images }) => [image, ...(images ?? [])]),
    ...SKILLS.map(({ icon }) => icon),
  ];

  for (const asset of assets) {
    assert.ok(asset.startsWith('/assets/'), `Unexpected asset path: ${asset}`);
    assert.ok(existsSync(fileURLToPath(new URL(`../public${asset}`, import.meta.url))), `Missing asset: ${asset}`);
  }

  for (const project of PROJECTS) {
    assert.ok(project.link && new URL(project.link).protocol === 'https:', `Invalid project link: ${project.title}`);
  }
});
