import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailInput: ElementFinder;
  private passwordInput: ElementFinder;
  private signInButton: ElementFinder;

  constructor () {
    this.emailInput = $('#email');
    this.passwordInput = $('#passwd');
    this.signInButton = $('#SubmitLogin');
  }

  public async login(email: string, password: string): Promise<void> {
    await this.emailInput.sendKeys(email);
    await this.passwordInput.sendKeys(password);
    await this.signInButton.click();
  }
}
