import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('IFrame height', () => {
  const iFramePage: IFramePage = new IFramePage();

  beforeAll(async () => {
    await browser.get('http://toolsqa.com/iframe-practice-page/');

    await iFramePage.setHeight(400);
  });

  it('Should have the proper height', async () => {
    await expect(iFramePage.getHeight())
      .toBe('400');
  });
});
