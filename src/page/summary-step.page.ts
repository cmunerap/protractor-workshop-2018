import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton =
        $('.cart_navigation a[title="Proceed to checkout"]');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
