import { $, ElementFinder, browser, ExpectedConditions as EC } from 'protractor';

export class ProductListPage {
  private addToCartButton: ElementFinder;

  constructor () {
    this.addToCartButton = $('.product-container .button-container > a[data-id-product="1"]');
  }

  public async addToCart(): Promise<void> {
    await browser.wait(EC.elementToBeClickable(this.addToCartButton), 3000);
    await this.addToCartButton.click();
  }
}
