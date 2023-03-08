const { ContactUsPage } = require('./contactUsPage')

class pageObjectM {
    constructor(page) {
        this.page = page
        this.contactUsPage = new ContactUsPage
        
    }
}
module.exports = { PageObjectManager }