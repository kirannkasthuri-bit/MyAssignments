import { test, expect } from "@playwright/test";

test('SalesForceLogin', async ({ page }) => {
  await page.goto('https://leaftaps.com/opentaps/control/main');
  await page.locator('//input[@id="username"]').fill('democsr2')
  await page.locator('//input[@id="password"]').fill('crmsfa')
  await page.click('//input[@class="decorativeSubmit"]')
  await page.click('//div[@id="label"]/a')
  await page.click('(//div[@class="x-panel-header"])[2]/a')
  await page.click('(//div[@class="frameSectionBody"]/ul/li/a)[2]')
  await page.locator('(//div[@class="fieldgroup-body"]/table/tbody/tr/td)[2]/input').fill('infosys')
  await page.locator('((//div[@class="fieldgroup-body"]/table/tbody/tr)[2]/td)[2]/input').fill('kiran')
  await page.locator('((//div[@class="fieldgroup-body"]/table/tbody/tr)[2]/td)[4]/input').fill('kasthuri')
  await page.locator('((//div[@class="fieldgroup-body"]/table/tbody/tr)[24]/td)[2]/input').click()
  await page.click('(//div[@class="frameSectionExtra"])[2]/a[3]')
  await page.click('((//div[@class="fieldgroup-body"])[1]/table/tbody/tr[12])/td[2]/input')
  await page.waitForTimeout(5000);
})