// Pages/AddToCart.js

import {
  attachStepScreenshot
} from '../utils/screenshotUtil.js';


class AddToCart {

  constructor(page) {

    this.page = page;

    // Locators
    this.cart = page.locator('.shopping_cart_link');

    this.cartBadge =
      page.locator('.shopping_cart_badge');

  }


  // =====================================================
  // ADD SINGLE PRODUCT
  // =====================================================

  async addProduct(product, testInfo) {

    await this.page
      .locator(`[data-test="add-to-cart-${product}"]`)
      .click();

    await attachStepScreenshot(
      this.page,
      testInfo,
      `After Adding ${product}`
    );

  }


  // =====================================================
  // ADD MULTIPLE PRODUCTS
  // =====================================================

  async addMultipleProducts(products, testInfo) {

    for (const product of products) {

      await this.addProduct(
        product,
        testInfo
      );

    }

  }


  // =====================================================
  // GET CART COUNT
  // =====================================================

  async getCartCount() {

    return await this.cartBadge.textContent();

  }


  // =====================================================
  // OPEN CART
  // =====================================================

  async openCart(testInfo) {

    await this.cart.click();

    await attachStepScreenshot(
      this.page,
      testInfo,
      'After Opening Cart'
    );

  }

}


export default AddToCart;