import { expect, test } from "@playwright/test";

test("visitors can inspect a project with the keyboard and return to their place", async ({
  page,
}) => {
  await page.goto("/");
  const project = page.getByRole("button", { name: "Explore Bask Health" });
  await project.focus();
  await page.keyboard.press("Enter");
  const dialog = page.getByRole("dialog", { name: "Bask Health" });
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("link", { name: "Visit Bask Health" }),
  ).toHaveAttribute("href", "https://bask.health");
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(project).toBeFocused();
});

test("motion can be paused and the preference survives a reload", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Pause animations" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-motion", "paused");
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Resume animations" }),
  ).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("data-motion", "paused");
});

test("OS reduced motion starts paused with all meaningful content visible", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-motion", "paused");
  await expect(
    page.getByRole("heading", {
      name: "Serious engineering. A little obsession.",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Explore Bask Health" }),
  ).toBeVisible();
});

test("project dialogs remain visible when animations are paused", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-motion", "paused");
  await page.getByRole("button", { name: "Explore Bask Health" }).click();
  const dialog = page.getByRole("dialog", { name: "Bask Health" });
  await expect(dialog).toHaveCSS("opacity", "1");
  await expect(
    dialog.getByRole("heading", { name: "My contribution" }),
  ).toBeVisible();
});

test("saved paused motion keeps project dialogs visible and dismissible", async ({
  page,
}) => {
  await page.addInitScript(() =>
    localStorage.setItem("portfolio-motion", "paused"),
  );
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-motion", "paused");
  const project = page.getByRole("button", { name: "Explore Breeze" });
  await project.click();
  const dialog = page.getByRole("dialog", { name: "Breeze" });
  await expect(dialog).toHaveCSS("opacity", "1");
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(project).toBeFocused();
});

test("the smallest mobile and tablet breakpoint fit without overflow", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  for (const width of [320, 641, 768]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
});

test("mobile navigation works without horizontal overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  const navigation = page.getByRole("dialog", { name: "Navigation" });
  await expect(navigation).toBeVisible();
  await navigation.getByRole("link", { name: "Selected work" }).click();
  await expect(navigation).not.toBeVisible();
  await expect(page).toHaveURL(/#work$/);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
});

test("the portfolio is complete when WebGL cannot initialize", async ({
  page,
}) => {
  await page.addInitScript(() => {
    const getContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (
      this: HTMLCanvasElement,
      type: string,
      ...args: unknown[]
    ) {
      if (
        type === "webgl" ||
        type === "webgl2" ||
        type === "experimental-webgl"
      )
        return null;
      return getContext.apply(this, [type, ...args] as Parameters<
        typeof getContext
      >);
    } as typeof getContext;
  });
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      name: "Serious engineering. A little obsession.",
    }),
  ).toBeVisible();
  await expect(page.locator(".sculpture-fallback")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Email Mauricio" }),
  ).toHaveAttribute("href", "mailto:mauriminio96@gmail.com");
});
