import { browser } from 'protractor';
import { PersonalInformation, PersonalInformationPage } from '../src/page';

describe('Fill form', () => {
  it('then should fill the form', async () => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

    await browser.get('http://toolsqa.com/automation-practice-form/');

    const personalInformation: PersonalInformation = {
      firstName: 'Alejandro',
      lastName: 'Perdomo',
      sex: 'Male',
      experience: '7',
      profession: ['Automation Tester'],
      tools: ['Selenium Webdriver'],
      continent: 'South America',
      commands: [
        'Browser Commands',
        'Navigation Commands',
        'Switch Commands',
        'Wait Commands',
        'WebElement Commands']
    };

    await personalInformationPage.fillForm(personalInformation);

    await expect(browser.getCurrentUrl())
      .toContain('firstname=Alejandro&lastname=Perdomo');

    await expect(personalInformationPage.getTitleText())
      .toBe('Practice Automation Form');
  });
});
