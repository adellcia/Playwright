//const {test, expect } = require('@playright/test');
import { test, expect } from '@playwright/test';
const firstName = 'Brad'
const lastName = "Pitt"
const emailAddress = 'brad.pitt@gmail.com'
const Comments = 'How to get to the station?'

test('1', async ({browser})=>
{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://webdriveruniversity.com/')
    const pageLink = page.locator('#contact-us')
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        pageLink.click()
    ])
    await newPage.getByPlaceholder("First Name").fill(firstName)
    await newPage.getByPlaceholder("Last Name").fill(lastName)
    await newPage.getByPlaceholder("Email Address").fill(emailAddress)
    await newPage.getByPlaceholder("Comments").fill(Comments)
    await newPage.locator('input[type="reset"]').click()
    await expect(await newPage.$eval('input[placeholder], textarea[placeholder="Comments"]', el => el.value)).toEqual('');
});


test.only('2', async ({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://webdriveruniversity.com/')
    const pageLink = page.locator('#contact-us')
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        pageLink.click()
    ])
await newPage.getByPlaceholder("First Name").fill(firstName)
await newPage.getByPlaceholder("Last Name").fill(lastName)
await newPage.getByPlaceholder("Email Address").fill(emailAddress)
await newPage.locator('input[type="submit"]').click()
await expect(newPage.url()).toBe('https://webdriveruniversity.com/Contact-Us/contact_us.php');
expect(await newPage.innerText('body')).toContain('Error: all fields are required');
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
test('7', async ({page})=>{
    await page.goto('https://webdriveruniversity.com/');
    await page.getByText('DROPDOWN, CHECKBOXE(S) & RADIO BUTTON(S)').click()
    await page.getByText('Radio Button(s)').filter('value="green"').click()
    const radioButton = await page.locator('value="green"')
    await expect(radioButton).toBeChecked()
})