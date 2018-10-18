import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  OrderSummaryPage,
  BankPaymentPage
} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(10000));

    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));

    await productListPage.addToCart();
    await(browser.sleep(3000));

    await productAddedModalPage.proceedToCheckout();
    await(browser.sleep(3000));

    await summaryStepPage.proceedToCheckout();
    await(browser.sleep(3000));

    await signInStepPage.fillEmail('aperdomobo@gmail.com');
    await signInStepPage.fillPassword('WorkshopProtractor');
    await signInStepPage.submitLogin();
    await(browser.sleep(3000));

    await addressStepPage.proceedToCheckout();
    await(browser.sleep(3000));

    await shippingStepPage.agreeWithTerms();
    await(browser.sleep(3000));
    await shippingStepPage.proceedToCheckout();
    await(browser.sleep(3000));

    await paymentStepPage.payByBankWire();
    await(browser.sleep(3000));

    await orderSummaryPage.confirmMyOrder();
    await(browser.sleep(3000));

    await expect(bankPaymentPage.orderIsCompleteText())
      .toBe('Your order on My Store is complete.');
  });
});