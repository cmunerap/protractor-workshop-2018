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

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');

    await menuContentPage.goToTShirtMenu();

    await productListPage.addToCart();

    await productAddedModalPage.proceedToCheckout();

    await summaryStepPage.proceedToCheckout();

    await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');

    await addressStepPage.proceedToCheckout();

    await shippingStepPage.agreeWithTerms();
    await shippingStepPage.proceedToCheckout();

    await paymentStepPage.payByBankWire();

    await orderSummaryPage.confirmMyOrder();

    await expect(bankPaymentPage.orderIsCompleteText())
      .toBe('Your order on My Store is complete.');
  });
});
