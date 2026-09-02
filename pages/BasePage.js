// Pages/BasePage.js

class BasePage {

  constructor(page) {
    this.page = page;
  }

  async navigate(url) {

    await this.page.goto(url, {
      waitUntil: 'domcontentloaded'
    });

  }

}

export default BasePage;