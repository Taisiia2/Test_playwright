import { test, expect } from '@playwright/test';

test('test', async ({ page, request }) => {
  
  await page.goto('https://adm.dev.goseechat.com/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('administrator@goseechat.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('dL67y7h3ZP');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('xpath = /html/body/div[1]/div/div[2]/div[1]/div[2]/div/div/div[3]/span/span[2]').click();
  
  // await page.locator('.menu-title').getByText('Apps');

  // await page.locator('#kt_app_header_menu').getByText('Apps').click();

  // await page.locator('#kt_app_header_menu').getByText('User Management').click();
  // await page.locator('#kt_app_header_menu').getByText('Employee', { exact: true }).click();

  // await page.getByRole('link', { name: 'Employees' }).click();
});