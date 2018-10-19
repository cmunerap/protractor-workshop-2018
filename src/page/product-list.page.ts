import { $, ElementFinder, browser, ExpectedConditions as EC } from 'protractor';

export class ProductListPage {
  private addToCartButton: ElementFinder;

  constructor () {
    this.addToCartButton = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async addToCart(): Promise<void> {
    await browser.wait(EC.elementToBeClickable(this.addToCartButton), 3000);
    await this.addToCartButton.click();
  }
}
