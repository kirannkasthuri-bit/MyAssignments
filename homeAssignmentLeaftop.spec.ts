import { test, expect } from "@playwright/test";

test('LeafTaps Create Lead', async ({ page }) => {
  await page.goto('http://leaftaps.com/opentaps/control/main');
  await page.locator('#username').fill('demoCSR2');
  await page.locator('#password').fill('crmsfa');
  await page.click('.decorativeSubmit');

  await page.click('text=CRM/SFA');
  await page.click('text=Leads');
  await page.click('text=Create Lead');

  await page.locator('#createLeadForm_companyName').fill('Infosys');
  await page.locator('#createLeadForm_firstName').fill('Kiran');
  await page.locator('#createLeadForm_lastName').fill('Kasthuri');
  await page.locator('#createLeadForm_personalTitle').fill('Mrs');
  await page.locator('#createLeadForm_generalProfTitle').fill('Associate');
  await page.locator('#createLeadForm_annualRevenue').fill('500000');
  await page.locator('#createLeadForm_departmentName').fill('IT');
  await page.locator('#createLeadForm_primaryPhoneNumber').fill('9442154660');
  await page.click('.smallSubmit');
  await page.waitForTimeout(5000);
});
