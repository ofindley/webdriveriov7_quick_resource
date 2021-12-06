class ProductsPage {

    get products() { return $$('a.ui.card'); }
    get productImages() { return $$('a.ui.card .image img'); }
    get productName() { return $('a.ui.card .content .header'); }
    get productNames() { return $$('a.ui.card .content .header'); }
    get productPrices() { return $$('a.ui.card .content .meta'); }

    open() {
        browser.url('/');
    }
}
module.exports = new ProductsPage();