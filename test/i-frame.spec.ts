import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Working with iframes', () => {
  const iFramePage: IFramePage = new IFramePage();

  beforeAll(async () => {
    await browser.get('http://toolsqa.com/iframe-practice-page/');

    await iFramePage.setHeight(400);
  });

  it('then should have the proper height', async () => {
    await expect(iFramePage.getHeight())
      .toBe('400');
  });

  it('then should return the title of the main context', async () => {
    await expect(iFramePage.getTitleCurrentContext())
      .toBe('Sample Iframe page');
  });

  it('then should return the title of the frame', async () => {
    await iFramePage.switchToFrame();

    await expect(iFramePage.getTitleCurrentContext())
      .toBe('Practice Automation Form');
  });

  it('then should return the title of the main context again', async () => {
    await iFramePage.switchToDefault();

    await expect(iFramePage.getTitleCurrentContext())
      .toBe('Sample Iframe page');
  });
});
