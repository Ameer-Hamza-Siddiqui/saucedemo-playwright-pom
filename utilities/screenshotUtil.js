// utils/screenshotUtil.js

// =====================================================
// STEP SCREENSHOT
// =====================================================

export async function attachStepScreenshot(page, testInfo, name) {

  await testInfo.attach(name, {

    body: await page.screenshot(),

    contentType: 'image/png',

  });

}


// =====================================================
// AFTER TEST SCREENSHOT
// =====================================================

export async function attachScreenshotAfterEach(page, testInfo) {

  // Final Screenshot
  await testInfo.attach('Final Screenshot', {

    body: await page.screenshot(),

    contentType: 'image/png',

  });


  // Failure Screenshot
  if (testInfo.status !== testInfo.expectedStatus) {

    await testInfo.attach('Failure Screenshot', {

      body: await page.screenshot(),

      contentType: 'image/png',

    });

  }

}