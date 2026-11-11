import { test as base, expect } from '@playwright/test';
import type { Page, TestInfo } from '@playwright/test';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

export const routes = [
  { name: 'home', path: '/' }, { name: 'sobre', path: '/sobre' },
  { name: 'stack', path: '/stack' }, { name: 'projetos', path: '/projetos' },
  { name: 'trajetoria', path: '/trajetoria' }, { name: 'contato', path: '/contato' },
];

export const test = base.extend({
  page: async ({ page }, use) => {
    // Fix the footer date while leaving timers and animations running.
    await page.clock.setFixedTime(new Date('2026-11-11T12:00:00-03:00'));
    const pageErrors: string[] = [];
    page.on('pageerror', error => pageErrors.push(error.message));
    const fonts = path.resolve('tests/visual/fonts');
    await page.route('https://fonts.googleapis.com/**', route => route.fulfill({
      contentType: 'text/css', path: path.join(fonts, 'google-fonts.css'),
    }));
    await page.route('https://fonts.gstatic.com/**', route => route.fulfill({
      contentType: 'font/ttf', path: path.join(fonts, path.basename(new URL(route.request().url()).pathname)),
    }));
    await use(page);
    expect(pageErrors, 'Browser runtime errors').toEqual([]);
  },
});
export { expect };

export async function ready(page: Page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    // Eagerly load lazy gallery assets before a full-page screenshot.
    document.querySelectorAll<HTMLImageElement>('img').forEach(image => { image.loading = 'eager'; });
    await Promise.all(Array.from(document.images, async image => {
      await image.decode();
      if (!image.naturalWidth) throw new Error(`Image failed: ${image.src}`);
    }));
    const families = ['400 16px Inter', '600 16px Inter', '500 16px "JetBrains Mono"'];
    for (const font of families) {
      if (!(await document.fonts.load(font)).length) throw new Error(`Missing font: ${font}`);
    }
  });
}

export async function assertLayout(page: Page) {
  const issues = await page.evaluate(() => {
    const errors: string[] = [];
    if (document.documentElement.scrollWidth > innerWidth + 1) errors.push('Horizontal page overflow');
    // Check boxes independently so overflow:hidden cannot hide regressions.
    for (const el of document.querySelectorAll<HTMLElement>('header.site-header *, main *, footer *')) {
      if (!el.getClientRects().length) continue;
      const bounds = el.getBoundingClientRect();
      if (bounds.width && (bounds.left < -1 || bounds.right > innerWidth + 1)) {
        errors.push(`Outside viewport: ${el.tagName}.${el.className}`);
      }
      if (el.matches('h1, h2, h3, p, .skill-name, .skill-role') && el.scrollWidth > el.clientWidth + 1) {
        errors.push(`Clipped text: ${el.tagName}.${el.className}`);
      }
    }
    const edge = document.querySelector('.nav-inner')!.getBoundingClientRect();
    for (const el of document.querySelectorAll('main .container, footer .container')) {
      const bounds = el.getBoundingClientRect();
      if (Math.abs(bounds.left - edge.left) > 1 || Math.abs(bounds.right - edge.right) > 1) errors.push('Container alignment');
    }
    for (const row of document.querySelectorAll('.skill-row')) {
      if (row.querySelector('.skill-name')!.getBoundingClientRect().right > row.querySelector('.skill-role')!.getBoundingClientRect().left + 1) errors.push('Overlapping skill text');
    }
    const pageTitle = document.querySelector<HTMLElement>('.page-heading h1');
    if (pageTitle && innerWidth >= 1024) {
      const lineHeight = Number.parseFloat(getComputedStyle(pageTitle).lineHeight);
      if (pageTitle.getBoundingClientRect().height > lineHeight + 1) errors.push('Unexpected desktop page-title wrap');
    }
    const contactBottom = document.querySelector('.contact-bottom');
    if (contactBottom && getComputedStyle(contactBottom).flexDirection === 'row') {
      const label = contactBottom.querySelector('p')!.getBoundingClientRect();
      const socials = contactBottom.querySelector('div')!.getBoundingClientRect();
      if (Math.abs((label.top + label.bottom) / 2 - (socials.top + socials.bottom) / 2) > 1) errors.push('Contact social row misalignment');
    }
    const hero = document.querySelector('.home-hero');
    if (hero) {
      const bounds = hero.getBoundingClientRect();
      const headerHeight = document.querySelector('.site-header')!.getBoundingClientRect().height;
      if (bounds.height + headerHeight < innerHeight - 1) errors.push('Hero smaller than viewport');
      for (const text of hero.querySelectorAll('h1, .hero-detail')) {
        const rect = text.getBoundingClientRect();
        if (rect.top < bounds.top - 1 || rect.bottom > bounds.bottom + 1) errors.push('Clipped hero content');
      }
    }
    return errors;
  });
  expect(issues, 'Layout boundaries and alignments').toEqual([]);
}

export async function visual(page: Page, info: TestInfo, name: string, fullPage = true) {
  // Keep incidental pointer hover out of the default visual states.
  await page.mouse.move(0, 0);
  if (fullPage) {
    // Gallery clicks scroll their buttons into view. Reset before full-page
    // capture so a sticky header is rendered at its real document origin.
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
    await expect(page.locator('.site-header')).toBeInViewport({ ratio: 1 });
  }
  if (process.env.VISUAL_REVIEW === '1') {
    const target = path.resolve('visual-review', info.project.name, name);
    await mkdir(path.dirname(target), { recursive: true });
    await page.screenshot({ path: target, fullPage, animations: 'disabled', caret: 'hide' });
    await info.attach(name, { path: target, contentType: 'image/png' });
    return;
  }
  const baseline = info.snapshotPath(name);
  const approvalsFile = path.resolve('tests/visual/baselines/approvals.json');
  const key = `${info.project.name}/${name}`;
  const approvals = existsSync(approvalsFile) ? JSON.parse(readFileSync(approvalsFile, 'utf8')) : { files: {} };
  if (!existsSync(baseline) || !approvals.files[key]) {
    await info.attach('unapproved-current', { body: await page.screenshot({ fullPage, animations: 'disabled' }), contentType: 'image/png' });
    throw new Error(`No approved baseline for ${key}. Run npm run visual:review and request visual approval. No baseline was created.`);
  }
  expect(approvals.environment, 'Use the canonical Linux/amd64 runner').toBe(`${process.platform}-${process.arch}`);
  const version = JSON.parse(readFileSync('node_modules/@playwright/test/package.json', 'utf8')).version;
  expect(approvals.playwright, 'Baseline browser version requires review').toBe(version);
  expect(createHash('sha256').update(readFileSync(baseline)).digest('hex'), `Approved baseline integrity: ${key}`).toBe(approvals.files[key]);
  await expect(page).toHaveScreenshot(name, { fullPage });
}
