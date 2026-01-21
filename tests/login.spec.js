import { test, expect } from '@playwright/test';

test('Valid login should redirect to dashboard', async ({ page }) => {

  // 1. Open application
  await page.goto('https://opensource-demo.orangehrmlive.com');

  // 2. Enter username
  await page.fill('input[name="username"]', 'Admin');

  // 3. Enter password
  await page.fill('input[name="password"]', 'admin123');

  // 4. Click login
  await page.click('button[type="submit"]');

  // 5. Assertion
  await expect(page).toHaveURL(/dashboard/);
});

