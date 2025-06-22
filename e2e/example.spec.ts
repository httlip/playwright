import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://google.com");

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Google/);
  const title = await page.title(); // ✅ lấy tiêu đề
  console.log("🔎 Page title is:", title); // ✅ in ra console
  await expect(title).toContain("Google"); // ✅ xác minh
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
