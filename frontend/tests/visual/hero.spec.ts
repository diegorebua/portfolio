import { test, expect, ready, assertLayout } from './fixtures';

test('hero: first viewport contains the name and description', async ({ page }) => {
  await page.goto('/');
  await ready(page);
  await assertLayout(page);
  await expect(page.locator('.hero-title')).toBeInViewport({ ratio: 1 });
  await expect(page.locator('.hero-detail')).toBeInViewport({ ratio: 1 });
  const dimensions = await page.evaluate(() => ({
    height: document.querySelector('.home-hero')!.getBoundingClientRect().height,
    available: innerHeight - document.querySelector('.site-header')!.getBoundingClientRect().height,
  }));
  expect(Math.abs(dimensions.height - dimensions.available)).toBeLessThanOrEqual(1);
});

for (const viewport of [
  { width: 320, height: 568 }, { width: 375, height: 667 },
  { width: 568, height: 320 }, { width: 844, height: 390 },
]) {
  test(`hero: compact ${viewport.width}x${viewport.height}`, async ({ page }, info) => {
    // Additional compact/landscape coverage runs once, in the mobile project.
    test.skip(info.project.name !== 'mobile-390');
    await page.setViewportSize(viewport);
    await page.goto('/');
    await ready(page);
    await assertLayout(page);
    await expect(page.locator('.hero-title')).toBeInViewport({ ratio: 1 });
    await expect(page.locator('.hero-detail')).toBeInViewport({ ratio: 1 });
    await page.screenshot({ path: info.outputPath(`hero-${viewport.width}x${viewport.height}.png`), animations: 'disabled' });
  });
}
