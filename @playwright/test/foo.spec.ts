import { test, expect } from '@playwright/test';

test('my test', async ({ page }) => {
  
  await page.goto('https://petstore3.swagger.io/');

  await page.click('xpath=//*[@id="operations-pet-addPet"]/div/button[1]');
  
  await page.click('xpath=//*[@id="operations-pet-addPet"]/div[2]/div/div[2]/div[1]/div[2]/button');
  
  await page.click('xpath=//*[@id="operations-pet-addPet"]/div[2]/div/div[3]/button');

  await expect(page.locator('xpath=//*[@id="operations-pet-addPet"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]').first()).toHaveText("200");

  await page.pause();
});