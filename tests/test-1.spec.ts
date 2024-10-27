import { test, expect } from '@playwright/test';

test('test', async ({ page, request }) => {
  await page.goto('https://adm.dev.goseechat.com/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('administrator@goseechat.com');
   await page.pause();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('dL67y7h3ZP');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.getByRole('button', { name: 'Apps' }).click();
  await page.getByRole('button', { name: 'User Management' }).click();
  await page.getByRole('button', { name: 'Employee' }).click();
  await page.getByRole('button', { name: 'Employees' }).click();

  // await page.locator('span').filter({ hasText: 'User Management' }).nth(2);
  // await page.locator('div:nth-child(3) > span > .menu-arrow').click();
  // await page.getByRole('link', { name: 'Employee', exact: true }).click();
});