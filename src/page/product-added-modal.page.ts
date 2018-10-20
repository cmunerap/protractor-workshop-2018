import { $, ElementFinder, browser, ExpectedConditions as EC } from 'protractor';

export class ProductAddedModalPage {
  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton =
        $('[style*="display: block;"] .button-container > a');
  }

  public async proceedToCheckout(): Promise<void> {
    await browser.wait(EC.elementToBeClickable(this.proceedToCheckoutButton), 3000);
    await this.proceedToCheckoutButton.click();
  }
}
