import { test, expect } from '@playwright/test';

test('test', async ({ page, request }) => {
  await page.goto('https://adm.dev.goseechat.com/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('administrator@goseechat.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('dL67y7h3ZP');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Admin Notifications').click();
  await page.getByRole('link', { name: 'Notifications' }).click();
  // await page1.getByRole('button', { name: ' Add Notification' }).click();
  // await page1.getByPlaceholder('Full name', { exact: true }).click();
  // await page1.getByPlaceholder('Full name', { exact: true }).fill('прарв');
  // await page1.getByPlaceholder('Slug').click();
  // await page1.getByPlaceholder('Slug').fill('псава');
  // await page1.getByRole('button', { name: 'Save Notification' }).click();
  // await page1.getByText('× Notification has been added').click();
});