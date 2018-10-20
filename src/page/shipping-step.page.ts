import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private agreeWithTermsCheck: ElementFinder;
  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.agreeWithTermsCheck =
        $('#cgv');

    this.proceedToCheckoutButton =
        $('.cart_navigation > button[name="processCarrier"]');
  }

  public async agreeWithTerms(): Promise<void> {
    await this.agreeWithTermsCheck.click();
  }

  public async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
