import { test, expect } from "@playwright/test";

test('SalesForceLogin', async ({ page }) => {
  await page.goto('https://login.salesforce.com/');
  await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
  await page.locator('[class="input r4 wide mb16 mt8 password"]').fill('TestLeaf@2025')
  page.click('.button.r4.wide.primary')
  page.click('//button[@class="slds-button slds-context-bar__button slds-icon-waffle_container slds-show"]')
  await page.click('//button[@aria-label="View All Applications"]')
  await page.click('(//span/p[@class="slds-truncate"])[7]')
  await page.click('//a[@title="Leads"]')
  await page.click('//div[@title="New"]')
  await page.click('//button[@aria-label="Salutation"]')
  await page.locator('//span[text()="Mrs."]').click()
  //await page.click('(//div[@class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click"])[3]')
  await page.click('(//div[@class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click"])[3]')
  await page.locator('//input[@placeholder="Last Name"]').fill('kasthuri')
  await page.locator('//input[@name="Company"]').fill('Infosys')
  // await page.click('//button[@name="SaveEdit"]')
  await page.waitForTimeout(5000);
})
