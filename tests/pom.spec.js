const base = require("@playwright/test");
const { EPAMPage } = require("../po/epam.js");

const test = base.test.extend({
  epamPage: async ({ page }, use) => {
    // create EPAM page and define as custom fixture via use function
    await use(new EPAMPage(page));
  },
});

// now EPAM page is available as fixture
test("Verify that user is to search fon EPAM main page", async ({
  epamPage,
}) => {
  await epamPage.search("Test Automation");
});