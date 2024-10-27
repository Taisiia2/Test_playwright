import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
test('loginization', async ({ page, request }) => {
  await page.goto('https://adm.dev.goseechat.com/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('administrator@goseechat.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('dL67y7h3ZP');
  await page.getByRole('button', { name: 'Sign In' }).click();
});