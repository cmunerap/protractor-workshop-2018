import { $, ElementFinder, browser } from 'protractor';

export class IFramePage {
  private iFrame: ElementFinder;

  constructor () {
    this.iFrame = $('#IF1');
  }

  public async setHeight(height: number) {
    await browser.executeScript(
        `return arguments[0].setAttribute('height', ${height})`, this.iFrame);
  }

  public getHeight() {
    return this.iFrame.getAttribute('height');
  }
}
