const loginPage = require('../../../page/login.page');
const users = require('../../../data/users.data');
const routes = require('../../../data/routes.data');

describe('Authentication - ', () => {
    beforeEach('Logout', async () => {
        await loginPage.open();
        await loginPage.login(users.testUser.username, users.testUser.password);
    });

    // Suite & Case id for QualityWatcher integration
    it('[S3C11] Authenticated user should be able to logout', async () => {
        await expect(browser).toHaveUrlContaining(routes.account);
        await expect(loginPage.myAccountButton).toBeDisplayed();
        await expect(loginPage.signOutButton).toBeDisplayed();

        await loginPage.signOutButton.click()
        await expect(browser).toHaveUrlContaining(routes.login);
        await expect(loginPage.emailField).toBeDisplayed();
        await expect(loginPage.passwordField).toBeDisplayed();
    });
});