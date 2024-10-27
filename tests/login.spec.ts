import { test, expect } from '@playwright/test';


test('loginization', async ({ page, request }) => {
  await page.goto('https://adm.dev.goseechat.com/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('administrator@goseechat.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('dL67y7h3ZP');
  await page.getByRole('button', { name: 'Sign In' }).click();
});