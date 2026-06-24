import { test, expect } from "@playwright/test";

test('SalesForceLogin', async ({ page }) => {
await page.goto('https://login.salesforce.com/')
await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
await page.locator('[class="input r4 wide mb16 mt8 password"]').fill('TestLeaf@2025')
page.click('.button.r4.wide.primary')
page.click('//button[@class="slds-button slds-context-bar__button slds-icon-waffle_container slds-show"]')
await page.click('//button[@aria-label="View All Applications"]')
await page.click('//span/p[text()="Individuals"]')
await page.click('//span[text()="firstname lastname"]')
//await page.click('//span[text()="No actions available"]')
//await page.click('//span[text()="Show Actions"]')
await page.click('//div[text()="Edit"]')
await page.click('//div/a/span[text()="Ms."]')
await page.click('//a[@title = "Mrs."]')
await page.locator('//input[@class="firstName compoundBorderBottom form-element__row input"]').fill('kiran')
await page.click(' //span[text()="Save"]')
await page.waitForTimeout(60000);
})