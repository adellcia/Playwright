const { expect } = require ('@playwright/tests');
class ContactUsPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.getByPlaceholder("First Name").
        this.lastName = page.getByPlaceholder("Last Name")
        this.emailAdress = page.getByPlaceholder("Email Address")
        this.Comments = page.getByPlaceholder("Comments")
        this.resetButton = page.locator('input[type="reset"]')
        this.submitButton = page.locator('input[type="submit"]')
        
    }

    async goToContactUs() {
        await this.page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    }

    async fillUpContactUsForm(firstName, lastName, emailAddress, Comments) {
        if(firstName !== null) await this.firstNameField.type(firstName)
        if(lastName !== null) await this.lastNameField.type(lastName)
    }
}
module.exports = { pageObjectM }