const productsPage = require('../../page/products.page');
const loginPage = require('../../page/login.page');
const userData = require('../../data/users.data');
const productData = require('../../data/products.data');

describe('Products - ', () => {
    beforeEach('Authenticate', async () => {
        await loginPage.open();
        await loginPage.login(userData.testUser.username, userData.testUser.password);
    });

    it('Verify that products are displayed correctly on the product page', async () => {
        await productsPage.open();

        await productsPage.productName.waitForDisplayed();
        await expect(productsPage.productNames).toBeElementsArrayOfSize(12);

        await productsPage.productNames.forEach(async (element) => {
            await expect(element).toHaveText(productData.product.list);
        });
    });
});