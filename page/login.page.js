class LoginPage {

    get header() { return $('h1.header'); }
    get emailField() { return $('#email'); }
    get passwordField() { return $('#password'); }
    get submitBtn() { return $('button[type=submit]'); }
    get errorMsg() { return $('.error.message .content') }

    get myAccountButton() { return $('//div[contains(@class,"menu")]/a[@href="/myaccount/"]'); }
    get signOutButton() { return $('//div[contains(@class,"menu")]/a[text()="Sign out"]'); }

    async login(email, pswd) {
        await this.emailField.setValue(email);
        await this.passwordField.setValue(pswd);
        await this.submitBtn.click();
    }

    open() {
        browser.url('/login');
    }
}
module.exports = new LoginPage();