const {test} = require('@playright/test');
import { test } from '@playwright/test';

test('Browser Context Test', async ({browser})=>
{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://webdriveruniversity.com/')
});

test('Browser Context', async ({browser}) =>
{
    const userName = page.locator("#username")
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title())

    await userName.type("raulshetty")
    await page.locator("[type='password']").type("learning")
    await signIn.click()
    console.log(await page.locator("[style*=block]").textContent())
    await expect(page.locator("[style*='block']")).toContainText('Incorrect')
    
    await userName.fill("")
    await userName.fill("rahulshettyacademy")
    await signIn.click()
    console.log(await page.locator(".card-body a").nth(0).textContent())
})

