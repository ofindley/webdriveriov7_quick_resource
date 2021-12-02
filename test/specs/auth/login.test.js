const loginPage = require('../../../page/login.page');
const users = require('../../../data/users.data');
const routes = require('../../../data/routes.data');

describe('Authentication - ', () => {
    beforeEach('Navigate', async () => {
        await console.log('url: ' + browser.options.baseUrl);
        await loginPage.open();
    });

    it('user should be able to login with a valid user account', async () => {
        await loginPage.login(users.testUser.username, users.testUser.password);

        await expect(browser).toHaveUrlContaining(routes.account);
        await expect(loginPage.myAccountButton).toBeDisplayed();
        await expect(loginPage.signOutButton).toBeDisplayed();
    });

    it('user should NOT be able to login with an invalid account', async () => {
        await loginPage.login(users.invalid.username, users.invalid.password);

        await expect(loginPage.errorMsg).toBeDisplayed();
        await expect(loginPage.errorMsg).toHaveTextContaining(users.invalid.errorMsg);
        await expect(loginPage.emailField).toBeDisplayed();
        await expect(loginPage.passwordField).toBeDisplayed();
        await expect(browser).toHaveUrlContaining(routes.login);
    });

    afterEach('Reload browser', async () => {
        await browser.reloadSession();
    });
});