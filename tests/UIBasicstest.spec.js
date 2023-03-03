//const {test, expect } = require('@playright/test');
import { test, expect } from '@playwright/test';
const firstName = 'Brad'
const lastName = "Pitt"
const emailAddress = 'brad.pitt@gmail.com'
const Comments = 'How to get to the station?'

test('Browser Context Test', async ({browser})=>
{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://webdriveruniversity.com/')
});

test('1', async ({page})=>
{
await page.goto('https://webdriveruniversity.com/');
await page.locator('#contact-us').evaluate((element) => {
    element.removeAttribute('target');
    element.click()
})
await page.fill('[placeholder="First Name"]', firstName);
await page.fill('[placeholder="Last Name"]', lastName);
await page.fill('[placeholder="Email Address"]', emailAddress);
await page.fill('[placeholder="Comments"]', Comments);
await page.locator('input[type="reset"]').click()
await expect(await page.$eval('input[placeholder], textarea[placeholder="Comments"]', el => el.value)).toEqual('');
})

test('2', async ({page})=>{

await page.goto('https://webdriveruniversity.com/');
await page.locator('#contact-us').evaluate((element) => {
    element.removeAttribute('target');
    element.click()
})
await page.fill('[placeholder="First Name"]', firstName);
await page.fill('[placeholder="Last Name"]', lastName);
await page.fill('[placeholder="Email Address"]', emailAddress);
await page.locator('input[type="submit"]').click()
await expect(page.url()).toBe('https://webdriveruniversity.com/Contact-Us/contact_us.php');
expect(await page.innerText('body')).toContain('Error: all fields are required');
})

test('3', async ({page})=>{
    await page.goto('https://webdriveruniversity.com/');
    await page.locator('#contact-us').evaluate((element) => {
        element.removeAttribute('target');
        element.click()
    })
    await page.fill('[placeholder="First Name"]', firstName);
    await page.fill('[placeholder="Last Name"]', lastName);
    await page.fill('[placeholder="Email Address"]', 'brad.pitt.gmail.com');
    await page.fill('[placeholder="Comments"]', Comments);
    await page.locator('input[type="submit"]').click()
    await expect(page.url()).toBe('https://webdriveruniversity.com/Contact-Us/contact_us.php');
expect(await page.innerText('body')).toContain('Error: Invalid email address');

})

test('4', async ({page})=>{
    await page.goto('https://webdriveruniversity.com/');
    await page.locator('#contact-us').evaluate((element) => {
        element.removeAttribute('target');
        element.click()
    })
    await page.fill('[placeholder="First Name"]', firstName);
    await page.fill('[placeholder="Last Name"]', lastName);
    await page.fill('[placeholder="Email Address"]', emailAddress);
    await page.fill('[placeholder="Comments"]', Comments);
    await page.locator('input[type="submit"]').click()
    await expect(page.url()).toBe('https://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')
   
})
test('6', async ({page})=>{
    await page.goto('https://webdriveruniversity.com/');
    await page.getByText('DROPDOWN, CHECKBOXE(S) & RADIO BUTTON(S)').evaluate((element) => {
        element.removeAttribute('target');
        element.click()
    })
    await page.getByText('Checkboxe(s)').filter('text=Option 1').click()
    await page.getByText('Checkboxe(s)').filter('text=Option 2').click()
    await page.getByText('Checkboxe(s)').filter('text=Option 4').click()
    await expect(page.locator('[type="checkbox"]')).toBeChecked()
})
test.only('7', async ({page})=>{
    await page.goto('https://webdriveruniversity.com/');
    await page.getByText('DROPDOWN, CHECKBOXE(S) & RADIO BUTTON(S)').click()
    await page.getByText('Radio Button(s)').filter('value="green"').click()
    const radioButton = await page.locator('value="green"')
    await expect(radioButton).toBeChecked()
})