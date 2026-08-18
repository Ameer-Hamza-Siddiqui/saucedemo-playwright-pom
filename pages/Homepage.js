class HomePage {
  constructor(page) {
    this.page = page;

    this.productsTitle = page.locator('.title');
    this.inventoryContainer = page.locator('.inventory_container');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.menuButton = page.locator('#react-burger-menu-btn');
  }

  async verifyProductsPage() {
    await this.productsTitle.waitFor();
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async openMenu() {
    await this.menuButton.click();
  }
}

export default HomePage;