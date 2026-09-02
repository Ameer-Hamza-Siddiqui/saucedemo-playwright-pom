// Pages/Checkout.js

import {
  attachStepScreenshot
} from '../utils/screenshotUtil.js';


class Checkout {

  constructor(page) {

    this.page = page;

    // Locators
    this.checkoutButton =
      page.locator('#checkout');

    this.firstName =
      page.locator('#first-name');

    this.lastName =
      page.locator('#last-name');

    this.postalCode =
      page.locator('#postal-code');

    this.continueButton =
      page.locator('#continue');

    this.finishButton =
      page.locator('#finish');

    this.completeHeader =
      page.locator('.complete-header');

  }


  // =====================================================
  // STEP 1 - CLICK CHECKOUT
  // =====================================================

  async clickCheckout(testInfo) {

    await this.checkoutButton.waitFor({
      state: 'visible'
    });

    await this.checkoutButton.click();

    await attachStepScreenshot(
      this.page,
      testInfo,
      '01 - After Clicking Checkout'
    );

  }


  // =====================================================
  // STEP 2 - FILL INFORMATION
  // =====================================================

  async fillInformation(
    firstName,
    lastName,
    postalCode,
    testInfo
  ) {

    await this.firstName.fill(firstName);

    await this.lastName.fill(lastName);

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

    await this.continueButton.waitFor({
      state: 'visible'
    });

    await this.continueButton.click();

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

    await this.finishButton.waitFor({
      state: 'visible'
    });

    await this.finishButton.click();

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

    return await this.completeHeader.textContent();

  }

}


export default Checkout;