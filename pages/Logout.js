
// Pages/Logout.js

import {
  attachStepScreenshot
} from '../utils/screenshotUtil.js';


class Logout {

  constructor(page) {

    this.page = page;

    // =====================================================
    // LOCATORS
    // =====================================================

    this.menuButton =
      page.locator('#react-burger-menu-btn');

    this.logoutButton =
      page.locator('#logout_sidebar_link');

  }


  // =====================================================
  // CLICK MENU BUTTON
  // =====================================================

  async clickMenuButton(testInfo) {

    await this.menuButton.waitFor({
      state: 'visible'
    });

    await this.menuButton.click();

    await attachStepScreenshot(
      this.page,
      testInfo,
      '01 - After Clicking Menu Button'
    );

  }


  // =====================================================
  // CLICK LOGOUT BUTTON
  // =====================================================

  async clickLogoutButton(testInfo) {

    await this.logoutButton.waitFor({
      state: 'visible'
    });

    await this.logoutButton.click();

    await attachStepScreenshot(
      this.page,
      testInfo,
      '02 - After Clicking Logout'
    );

  }


  // =====================================================
  // LOGOUT
  // =====================================================

  async logout(testInfo) {

    await this.clickMenuButton(testInfo);

    await this.clickLogoutButton(testInfo);

  }

}


export default Logout;

