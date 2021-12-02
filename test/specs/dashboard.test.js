const loginPage = require('../../page/login.page');
const users = require('../../data/users.data');
const routes = require('../../data/routes.data');

describe('SignUp - ', () => {
    beforeEach('Navigate', async () => {
        await console.log('NEW: ' + browser.options.baseUrl);
        await loginPage.open();
    });

    it('New user account', async () => {
        await loginPage.login(users.testUser.username, users.testUser.password);

        await expect(browser).toHaveUrlContaining(routes.account);
        await expect(loginPage.myAccountButton).toBeDisplayed();
        await expect(loginPage.signOutButton).toBeDisplayed();
    });
});