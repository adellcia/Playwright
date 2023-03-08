import { tests, expect } from '@playwright/test';
const {test, expect } = require('@playright/test')
const firstName = 'Brad'
const lastName = "Pitt"
const emailAddress = 'brad.pitt@gmail.com'
const Comments = 'How to get to the station?'

test.only('1', async ({browser})=> {

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

test('5', async ({browser}) => {
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
    const locator = newPage.getByText('Option 1', 'Option 2', 'Option 3', 'Option 4')
    await (expect(locator).toBeChecked())
    await newPage.getByText('Option 2').uncheck()
    await newPage.getByText('Option 4').uncheck()
   

})
test('7', async ({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://webdriveruniversity.com/')
    const pageLink = page.locator('#dropdown-checkboxes-radiobuttons')
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        pageLink.click()
    ])
    const radioButton = ['Green', 'Blue', 'Yellow', 'Orange', 'Purple']
    for (let i = 0; i < radioButton.number; i++) {
        const buttons = await newPage.locator('.radio-buttons');
        await buttons.selectOption(radioButton[i]);
        await expect(buttons).toBeChecked()
    }
})
// test.only('8', async ({browser})=>{

//     const context = await browser.newContext()
//     const page = await context.newPage()
//     await page.goto('https://webdriveruniversity.com/')
//     const pageLink = page.getByText('Datepicker').first()
//     const [newPage] = await Promise.all([
//         context.waitForEvent('page'),
//         pageLink.click()
//     ])
//     let date = new Date();
// date.setDate(date.getDate() + 2);
// let futureDay = date.getDate();
// let futureMonth = date.toLocaleString('default', { month: 'long' });
// let assertMonth = date.toLocaleString('default', { month: '2-digit' });
// let dateAssert = assertMonth + '-' + futureDay + '-' + date.getFullYear();

// const input = await newPage.waitForSelector('#datepicker');
// await input.click();

// await selectDayFromCurrent();

// async function selectDayFromCurrent() {
//     const dateAttribute = await newPage.$eval('.datepicker-switch', element => element.textContent);
//     if (!dateAttribute.includes(futureMonth)) {
//         await newPage.click('.next');
//         await selectDayFromCurrent();
//     } else {
//         await newPage.click(`.day=${futureDay}`);
//     }
// }
    
// )
test('9', async ({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://webdriveruniversity.com/')
    const pageLink = page.locator('#autocomplete-textfield')
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        pageLink.click()
    ])
    const search = newPage.getByPlaceholder('Food Item')
    await search.fill('chi')
    await newPage.getByText('ps').click()
    await expect(search).toHaveValue('Chips')
})
test('10', async ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://webdriveruniversity.com/')
    const pageLink = page.locator('#ajax-loader')
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        pageLink.click()
    ])
    const button = newPage.getByText('CLICK ME!')
    await button.click()
})