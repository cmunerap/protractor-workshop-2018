import { $, ElementFinder, promise } from 'protractor';

export class BankPaymentPage {
  private orderIsCompleteTitle: ElementFinder;

  constructor () {
    this.orderIsCompleteTitle =
        $('#center_column > .box > .cheque-indent > strong');
  }

  public orderIsCompleteText(): promise.Promise<string> {
    return this.orderIsCompleteTitle.getText();
  }
}
