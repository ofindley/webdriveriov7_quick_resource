const productsPage = require('../../page/products.page');
const loginPage = require('../../page/login.page');
const userData = require('../../data/users.data');
const productData = require('../../data/products.data');

describe('Products - ', () => {
    beforeEach('Authenticate', async () => {
        await loginPage.open();
        await loginPage.login(userData.testUser.username, userData.testUser.password);
    });

    // Suite & Case id for QualityWatcher integration
    it('[S4C12] Verify that products are displayed correctly on the product page', async () => {
        await productsPage.open();

        await productsPage.productName.waitForDisplayed();

        /* Added Bug
            Failing this test on purpose to trigger a failed test in the test results. [change 14 to 12 to stop test from failing]
        */
        await expect(productsPage.productNames).toBeElementsArrayOfSize(14);

        await productsPage.productNames.forEach(async (element) => {
            await expect(element).toHaveText(productData.product.list);
        });
    });
});