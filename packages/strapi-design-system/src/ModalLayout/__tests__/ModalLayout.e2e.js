const { injectAxe, getViolations } = require('axe-playwright');
const { test, expect } = require('@playwright/test');

test.describe.parallel('ModalLayout', () => {
  test.beforeEach(async ({ page }) => {
    // This is the URL of the Storybook Iframe
    await page.goto('/iframe.html?id=design-system-components-modallayout--base&viewMode=story');
    await injectAxe(page);
  });

  test('triggers axe on the document', async ({ page }) => {
    const violations = await getViolations(page);

    // Axe throws an error about landmark for the role dialog
    const realViolations = violations.filter((violation) => violation.id !== 'region');

    expect(realViolations.length).toBe(0);
  });
});
