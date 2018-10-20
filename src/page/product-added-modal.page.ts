import { $, ElementFinder, browser, ExpectedConditions as EC } from 'protractor';

export class ProductAddedModalPage {
  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton =
        $('div#layer_cart .layer_cart_cart a[title="Proceed to checkout"]');
  }

  public async proceedToCheckout(): Promise<void> {
    await browser.wait(EC.elementToBeClickable(this.proceedToCheckoutButton), 3000);
    await this.proceedToCheckoutButton.click();
  }
}
