// @ts-check
//const { test, expect } = require("@playwright/test");
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
});

test.describe("My First Test Suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.epam.com/");
  });

  test("should open https://www.epam.com/ page", async ({ page }) => {
    await expect(page).toHaveTitle(
      "EPAM | Software Engineering & Product Development Services  ",
    );
  });

  test("should open hamburger menu", async ({ page }) => {
    await page.locator("button.hamburger-menu__button").click();
    await expect(
      page.locator("div.hamburger-menu__dropdown-section"),
    ).toBeVisible();
  });
});
