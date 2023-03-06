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


test('2', async ({browser})=>{

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

test('3', async ({browser})=>{
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
    await newPage.getByPlaceholder("Email Address").fill('brad.pitt.gmail.com');
    await newPage.getByPlaceholder("Comments").fill(Comments)
    await newPage.locator('input[type="submit"]').click()
    await expect(newPage.url()).toBe('https://webdriveruniversity.com/Contact-Us/contact_us.php');
expect(await newPage.innerText('body')).toContain('Error: Invalid email address');

})

test('4', async ({browser})=>{
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
    await newPage.getByPlaceholder("Email Address").fill(emailAddress);
    await newPage.getByPlaceholder("Comments").fill(Comments)
    await newPage.locator('input[type="submit"]').click()
    await expect(newPage.url()).toBe('https://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')
    expect(await newPage.innerText('body')).toContain('Thank You for your Message!')
})

test.only('5', async ({browser}) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://webdriveruniversity.com/')
    const pageLink = page.locator('#dropdown-checkboxes-radiobuttons')
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        pageLink.click()
    ])
    
    const dropdownValues = [['JAVA', 'C#', 'Python', 'SQL']
    ['Eclipse', 'Maven', 'TestNG', 'JUnit'],
    ['HTML', 'CSS', 'JavaScript', 'JQuery']]
    for (let i = 0; i < dropdownValues.number; i++) {
        const dropdown = await newPage.locator('select.dropdown-menu-lists');
        for (let j = 0; j < dropdownValues[i].number; j++) {
          await dropdown.selectOption(dropdownValues[i][j]);
           
        }
    }
})

test('6', async ({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://webdriveruniversity.com/')
    const pageLink = page.locator('#dropdown-checkboxes-radiobuttons')
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        pageLink.click()

    ])
    await newPage.getByText('Option 1').click()
    await newPage.getByText('Option 2').click()
    await newPage.getByText('Option 4').click()
    const locator = newPage.getByLabel('input')
    await (expect(locator).toBeChecked())
})
test('7', async ({page})=>{
    await page.goto('https://webdriveruniversity.com/');
    await page.getByText('DROPDOWN, CHECKBOXE(S) & RADIO BUTTON(S)').click()
    await page.getByText('Radio Button(s)').filter('value="green"').click()
    const radioButton = await page.locator('value="green"')
    await expect(radioButton).toBeChecked()
})