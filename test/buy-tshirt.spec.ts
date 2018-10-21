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

describe('Start the application', () => {
  it('then should open the page', async () => {
    await browser.get('http://automationpractice.com/');
  });
});

describe('T-shirt purchase process start', () => {
  it('then should begin the bought process', async () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productListPage: ProductListPage = new ProductListPage();
    const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
    const summaryStepPage: SummaryStepPage = new SummaryStepPage();

    await menuContentPage.goToTShirtMenu();

    await productListPage.selectProduct('Faded Short Sleeve T-shirts');

    await productAddedModalPage.proceedToCheckout();

    await summaryStepPage.proceedToCheckout();
  });
});

describe('Logging in the application', () => {
  it('then should submit the credentials of the user', async () => {
    const signInStepPage: SignInStepPage = new SignInStepPage();

    await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
  });
});

describe('Select default address and ship', () => {
  it('then should select the default address and start shipping', async () => {
    const addressStepPage: AddressStepPage = new AddressStepPage();
    const shippingStepPage: ShippingStepPage = new ShippingStepPage();

    await addressStepPage.proceedToCheckout();

    await shippingStepPage.agreeWithTerms();
    await shippingStepPage.proceedToCheckout();
  });
});

describe('Payment in the bank', () => {

  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

  it('then should be bought a t-shirt', async () => {

    await paymentStepPage.payByBankWire();

    await orderSummaryPage.confirmMyOrder();

    await expect(bankPaymentPage.orderIsCompleteText())
      .toBe('Your order on My Store is complete.');
  });
});
