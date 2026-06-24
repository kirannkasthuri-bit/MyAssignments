import { test, expect } from "@playwright/test";

test('SalesForceLogin', async ({ page }) => {
  await page.goto('https://login.salesforce.com/');
  await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
  await page.locator('[class="input r4 wide mb16 mt8 password"]').fill('TestLeaf@2025')
  page.click('.button.r4.wide.primary')
  page.click('//button[@class="slds-button slds-context-bar__button slds-icon-waffle_container slds-show"]')
  await page.click('//button[@aria-label="View All Applications"]')
  await page.click('(//span[@part="formatted-rich-text"])[88]/p')
  await page.click('//div[@title="New"]')
  await page.locator('(//div[@class="uiInput uiInputText uiInput--default uiInput--input"])[2]/input').fill('kasthuri')
  await page.click('//button[@class="slds-button slds-button_neutral uiButton--brand uiButton forceActionButton"]/span')
  await page.waitForTimeout(30000);
})