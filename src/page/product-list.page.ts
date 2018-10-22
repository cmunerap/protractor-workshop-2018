import {
  $$,
  ElementFinder,
  ElementArrayFinder,
  browser,
  ExpectedConditions as EC
} from 'protractor';

export class ProductListPage {
  private products: ElementArrayFinder;

  constructor () {
    this.products = $$('.product_list > li');
  }

  private findByProduct(name: string): ElementFinder {
    return this.products
    .filter(product =>
      product.$('.right-block h5[itemprop="name"] .product-name').getText()
      .then(text => text === name)
    )
    .first();
  }

  public async selectProduct(name: string) {
    const product = this.findByProduct(name);
    const addToCartButton = product.$('.right-block .button-container a[title="Add to cart"]');
    await browser.wait(EC.elementToBeClickable(addToCartButton), 3000);
    await addToCartButton.click();
  }
}
