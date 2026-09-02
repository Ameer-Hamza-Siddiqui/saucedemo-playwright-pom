// Pages/HomePage.js

import {
  attachStepScreenshot
} from '../utils/screenshotUtil.js';


class HomePage {

  constructor(page) {

    this.page = page;

    // Locators
    this.productsTitle = page.locator('.title');

    this.inventoryContainer =
      page.locator('.inventory_container');

    this.cartIcon =
      page.locator('.shopping_cart_link');

    this.menuButton =
      page.locator('#react-burger-menu-btn');

  }


  // =====================================================
  // VERIFY PRODUCTS PAGE
  // =====================================================

  async verifyProductsPage(testInfo) {

    await this.productsTitle.waitFor({
      state: 'visible'
    });

    await attachStepScreenshot(
      this.page,
      testInfo,
      'Home Page - Products Verified'
    );

  }


  // =====================================================
  // OPEN CART
  // =====================================================

  async openCart(testInfo) {

    await this.cartIcon.click();

    await attachStepScreenshot(
      this.page,
      testInfo,
      'Home Page - Cart Opened'
    );

  }


  // =====================================================
  // OPEN MENU
  // =====================================================

  async openMenu(testInfo) {

    await this.menuButton.click();

    await attachStepScreenshot(
      this.page,
      testInfo,
      'Home Page - Menu Opened'
    );

  }

}


export default HomePage;