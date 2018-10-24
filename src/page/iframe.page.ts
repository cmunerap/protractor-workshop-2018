import { $, ElementFinder, browser } from 'protractor';

export class IFramePage {
  private iFrame: ElementFinder;
  private titleHeader: ElementFinder;

  constructor () {
    this.iFrame = $('#IF1');
    this.titleHeader = $('#content h1');
  }

  public async setHeight(height: number) {
    await browser.executeScript(
        `return arguments[0].setAttribute('height', ${height})`, this.iFrame);
  }

  public getHeight() {
    return this.iFrame.getAttribute('height');
  }

  public getTitleCurrentContext() {
    return this.titleHeader.getText();
  }

  public async switchToFrame() {
    await browser.switchTo().frame(this.iFrame.getWebElement());
  }

  public async switchToDefault() {
    await browser.switchTo().defaultContent();
  }
}
