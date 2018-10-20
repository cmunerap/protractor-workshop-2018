import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankWireButton: ElementFinder;

  constructor () {
    this.payByBankWireButton =
        $('#HOOK_PAYMENT a[title="Pay by bank wire"]');
  }

  public async payByBankWire(): Promise<void> {
    await this.payByBankWireButton.click();
  }
}
