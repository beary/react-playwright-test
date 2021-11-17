import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const btn = page.locator('.ui-auto.count');
  let i = 0;
  for (; i < 100; i++) {
    await btn.click();
  }
  await expect(btn).toHaveText(`count is: ${i}`);
})
