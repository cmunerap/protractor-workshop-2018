import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailInput: ElementFinder;
  private passwordInput: ElementFinder;
  private signInButton: ElementFinder;

  constructor () {
    this.emailInput = $('#email');
    this.passwordInput = $('#passwd');
    this.signInButton = $('#SubmitLogin > span');
  }

  public async fillEmail(email: string): Promise<void> {
    await this.emailInput.sendKeys(email);
  }

  public async fillPassword(password: string): Promise<void> {
    await this.passwordInput.sendKeys(password);
  }

  public async submitLogin(): Promise<void> {
    await this.signInButton.click();
  }
}
