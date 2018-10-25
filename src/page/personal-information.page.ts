import { ElementFinder, ElementArrayFinder, element, by, FileDetector, browser } from 'protractor';
import { resolve } from 'path';

export interface PersonalInformation {
  firstName?: string;
  lastName?: string;
  sex?: string;
  experience?: string;
  profession?: string[];
  file?: string;
  tools?: string[];
  continent?: string;
  commands?: string[];
}

export class PersonalInformationPage {
  private titleLabel: ElementFinder;

  private firstNameInput: ElementFinder;
  private lastNameInput: ElementFinder;
  private sexOptions: ElementArrayFinder;
  private experienceOptions: ElementArrayFinder;
  private professionChecks: ElementArrayFinder;
  private fileInput: ElementFinder;
  private toolsChecks: ElementArrayFinder;
  private continentOptions: ElementArrayFinder;
  private commandsOptions: ElementArrayFinder;
  private submitButton: ElementFinder;

  constructor () {
    this.titleLabel = element(by.className('wpb_content_element')).element(by.tagName('h1'));

    this.firstNameInput = element(by.name('firstname'));
    this.lastNameInput = element(by.name('lastname'));
    this.sexOptions = element.all(by.name('sex'));
    this.experienceOptions = element.all(by.name('exp'));
    this.professionChecks = element.all(by.name('profession'));
    this.fileInput = element(by.id('photo'));
    this.toolsChecks = element.all(by.name('tool'));
    this.continentOptions = element(by.name('continents')).all(by.tagName('option'));
    this.commandsOptions = element(by.name('selenium_commands')).all(by.tagName('option'));

    this.submitButton = element(by.id('submit'));
  }

  private findSex(sex: string): ElementFinder {
    return this.sexOptions
      .filter(option =>
        option.getAttribute('value')
        .then(value => value === sex)
      )
      .first();
  }

  private findExperience(experience: string): ElementFinder  {
    return this.experienceOptions
      .filter(option =>
        option.getAttribute('value')
        .then(value => value === experience)
      )
      .first();
  }

  private findProfessions(professions: string[]): ElementArrayFinder {
    return this.professionChecks
      .filter(option =>
        option.getAttribute('value')
        .then(value => professions.indexOf(value) > -1)
      );
  }

  private findTools(tools: string[]): ElementArrayFinder {
    return this.toolsChecks
      .filter(option =>
        option.getAttribute('value')
        .then(value => tools.indexOf(value) > -1)
      );
  }

  private findContinent(continent: string): ElementFinder {
    return this.continentOptions
      .filter(option =>
        option.getText()
        .then(text => text === continent)
      )
      .first();
  }

  private findCommands(commands: string[]): ElementArrayFinder {
    return this.commandsOptions
      .filter(option =>
        option.getText()
        .then(value => commands.indexOf(value) > -1)
      );
  }

  public async fillForm(pi: PersonalInformation) {
    await this.firstNameInput.sendKeys(pi.firstName);
    await this.lastNameInput.sendKeys(pi.lastName);
    await this.findSex(pi.sex).click();
    await this.findExperience(pi.experience).click();
    await this.findProfessions(pi.profession).click();

    if (pi.file) {
      await browser.setFileDetector(new FileDetector());

      await this.fileInput.sendKeys(resolve(__dirname, pi.file));

      await browser.setFileDetector(undefined);
    }

    await this.findTools(pi.tools).click();
    await this.findContinent(pi.continent).click();
    await this.findCommands(pi.commands).click();
  }

  public async submit(pi: PersonalInformation) {
    await this.fillForm(pi);

    await this.submitButton.click();
  }

  public getTitleText() {
    return this.titleLabel.getText();
  }

  public getFileText() {
    return this.fileInput.getText();
  }
}
