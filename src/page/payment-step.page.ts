import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankWireButton: ElementFinder;

  constructor () {
    this.payByBankWireButton =
        $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async payByBankWire(): Promise<void> {
    await this.payByBankWireButton.click();
  }
}
