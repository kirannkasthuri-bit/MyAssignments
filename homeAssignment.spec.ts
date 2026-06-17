import test, { chromium, firefox, webkit } from "@playwright/test";

test ("Launch Browser",async()=>{
     const browser = await chromium.launch({channel:'msedge',headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()


    await page.goto("https://www.redbus.in/")
    await page.waitForTimeout(3000)

    let pagetitle=await page.title()
    console.log(pagetitle) 

    let pageurl=page.url()
    console.log(pageurl);
 
    await page.close();
    const webkitBwrowser = await webkit.launch({headless:false})
    const webkitContext = await browser.newContext()
    const webkitPage = await context.newPage()


    await webkitPage.goto("https://www.flipkart.com/")
    await webkitPage.waitForTimeout(3000)

    let webkitPageTitle=await webkitPage.title()
    console.log(webkitPageTitle) 

    let webkitPageurl=webkitPage.url()
    console.log(webkitPageurl);
})
