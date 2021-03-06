import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton =
        $('.cart_navigation > button[name="processAddress"]');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
