import { attachStepScreenshot } from '../utilities/screenshotUtil.js';
import BasePage from './BasePage.js';

class Checkout extends BasePage {

  constructor(page) {
    super(page);

    // Locators
    this.checkoutButton = page.locator('#checkout');
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.completeHeader = page.locator('.complete-header');
  }

  // =====================================================
  // STEP 1 - CLICK CHECKOUT
  // =====================================================
  async clickCheckout(testInfo) {
    await this.checkoutButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.checkoutButton.click();
    await this.page.waitForURL('**/checkout-step-one.html', { timeout: 10000 });

    await attachStepScreenshot(
      this.page,
      testInfo,
      '01 - After Clicking Checkout'
    );
  }

  // =====================================================
  // STEP 2 - FILL INFORMATION
  // =====================================================
  async fillInformation(firstName, lastName, postalCode, testInfo) {
    await this.firstName.waitFor({ state: 'visible', timeout: 10000 });
    await this.firstName.fill(firstName);

    await this.lastName.waitFor({ state: 'visible', timeout: 10000 });
    await this.lastName.fill(lastName);

    await this.postalCode.waitFor({ state: 'visible', timeout: 10000 });
    await this.postalCode.fill(postalCode);

    await attachStepScreenshot(
      this.page,
      testInfo,
      '02 - After Filling Information'
    );
  }

  // =====================================================
  // STEP 3 - CONTINUE
  // =====================================================
  async continueCheckout(testInfo) {
    await this.continueButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.continueButton.click();
    await this.page.waitForURL('**/checkout-step-two.html', { timeout: 10000 });

    await attachStepScreenshot(
      this.page,
      testInfo,
      '03 - After Clicking Continue'
    );
  }

  // =====================================================
  // STEP 4 - FINISH
  // =====================================================
  async finishCheckout(testInfo) {
    await this.finishButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.finishButton.click();
    await this.completeHeader.waitFor({ state: 'visible', timeout: 10000 });

    await attachStepScreenshot(
      this.page,
      testInfo,
      '04 - After Clicking Finish'
    );
  }

  // =====================================================
  // GET CONFIRMATION MESSAGE
  // =====================================================
  async getConfirmationMessage() {
    await this.completeHeader.waitFor({ state: 'visible', timeout: 5000 });
    return await this.completeHeader.textContent();
  }

}

export default Checkout;