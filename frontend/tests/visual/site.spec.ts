import { test, expect, routes, ready, assertLayout, visual } from './fixtures';

for (const route of routes) {
  test(`${route.name}: page`, async ({ page }, info) => {
    await page.goto(route.path);
    await ready(page);
    await assertLayout(page);
    await visual(page, info, `${route.name}.png`);
  });
}

test('navigation: overlay and keyboard', async ({ page }, info) => {
  await page.goto('/');
  await ready(page);
  await page.getByRole('button', { name: 'Abrir menu', exact: true }).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  const size = page.viewportSize()!;
  await expect(dialog).toHaveCSS('width', `${size.width}px`);
  await expect(dialog).toHaveCSS('height', `${size.height}px`);
  await expect(page.locator('body')).toHaveCSS('position', 'fixed');
  for (const link of await dialog.getByRole('link').all()) await expect(link).toBeInViewport({ ratio: 1 });
  await visual(page, info, 'menu.png', false);
  await dialog.getByRole('link', { name: 'Contato', exact: true }).focus();
  await page.keyboard.press('Tab');
  await expect(dialog.getByRole('button', { name: 'Fechar menu' })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Abrir menu', exact: true })).toBeFocused();
  await expect(page.locator('body')).not.toHaveCSS('position', 'fixed');
});

test('projects: gallery selection', async ({ page }, info) => {
  await page.goto('/projetos');
  await ready(page);
  await page.getByRole('button', { name: 'Mostrar imagem 2 de 4', exact: true }).click();
  await ready(page);
  await assertLayout(page);
  await visual(page, info, 'projetos-gallery.png');
});

test('motion: reveal and navigation remain functional', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  await ready(page);
  for (let top = 0; top < await page.locator('body').evaluate(body => body.scrollHeight); top += 400) {
    await page.evaluate(top => window.scrollTo({ top, behavior: 'instant' }), top);
    // Let IntersectionObserver receive each scroll position.
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  }
  await expect(page.locator('.reveal-pending')).toHaveCount(0);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.getByRole('button', { name: 'Abrir menu', exact: true }).click();
  await expect(page.getByRole('dialog').getByRole('link', { name: 'Contato', exact: true })).toHaveCSS('opacity', '1');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toBeHidden();
});
