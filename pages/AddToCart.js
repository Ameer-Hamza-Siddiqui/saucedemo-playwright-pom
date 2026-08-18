class AddToCart {
  constructor(page) {
    this.page = page;

    this.cart = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addProduct(product) {
    await this.page
      .locator(`[data-test="add-to-cart-${product}"]`)
      .click();
  }

  async addMultipleProducts(products) {
    for (const product of products) {
      await this.addProduct(product);
    }
  }

  async getCartCount() {
    return await this.cartBadge.textContent();
  }

  async openCart() {
    await this.cart.click();
  }
}

export default AddToCart;