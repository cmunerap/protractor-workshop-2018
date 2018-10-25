import { browser } from 'protractor';
import { PersonalInformation, PersonalInformationPage } from '../src/page';

describe('Fill form', () => {
  const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');

    const personalInformation: PersonalInformation = {
      firstName: 'Alejandro',
      lastName: 'Perdomo',
      sex: 'Male',
      experience: '7',
      profession: ['Automation Tester'],
      file: '../../../resources/mercedez.jpg',
      downloadFile: true,
      tools: ['Selenium Webdriver'],
      continent: 'South America',
      commands: [
        'Browser Commands',
        'Navigation Commands',
        'Switch Commands',
        'Wait Commands',
        'WebElement Commands']
    };

    await personalInformationPage.submit(personalInformation);
  });

  it('then should fill the form', async () => {
    await expect(browser.getCurrentUrl())
      .toContain('firstname=Alejandro&lastname=Perdomo');
  });

  it('then file should be uploaded', async () => {
    await expect(browser.getCurrentUrl())
      .toContain('mercedez.jpg');
  });

  it('then should download the file', async () => {
    await expect(personalInformationPage.getDownloadedFileLength())
      .toBeGreaterThan(0);
  });

  it('then should have the proper title', async () => {
    await expect(personalInformationPage.getTitleText())
      .toBe('Practice Automation Form');
  });
});
