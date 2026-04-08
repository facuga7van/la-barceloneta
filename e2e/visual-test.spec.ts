import { test, expect, type Page } from "@playwright/test";

const BASE = "http://localhost:5174/la-barceloneta/";
const SCREENSHOT_DIR = "e2e/screenshots";

// Helper: scroll to element and wait for animations
async function scrollToAndWait(page: Page, selector: string, ms = 800) {
  await page.locator(selector).first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(ms);
}

// Helper: take a named screenshot
async function snap(page: Page, name: string) {
  await page.screenshot({ path: `${SCREENSHOT_DIR}/${name}.png`, fullPage: false });
}

test.describe("Visual Test — Full Page Walkthrough", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE, { waitUntil: "networkidle" });
    await page.waitForTimeout(2000); // Wait for hero animations
  });

  // ─── DESKTOP ───────────────────────────────────────────

  test("Desktop — Hero section", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(BASE, { waitUntil: "networkidle" });
    await page.waitForTimeout(2500);
    await snap(page, "01-hero-desktop");
  });

  test("Desktop — Hero buttons hover", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(BASE, { waitUntil: "networkidle" });
    await page.waitForTimeout(2000);
    const btn = page.locator('a[data-name="Primary button"]').first();
    await btn.hover();
    await page.waitForTimeout(400);
    await snap(page, "02-hero-button-hover");
  });

  test("Desktop — Image carousel", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await scrollToAndWait(page, '[data-name="Images"]');
    await snap(page, "03-carousel-default");

    // Hover an image for parallax effect (close floating video first)
    const closeVideo = page.locator('button[aria-label="Cerrar video"]');
    if (await closeVideo.isVisible()) await closeVideo.click();
    await page.waitForTimeout(300);
    const carouselDiv = page.locator('[data-name="Images"] > div').first();
    await carouselDiv.hover({ position: { x: 150, y: 200 }, force: true });
    await page.waitForTimeout(500);
    await snap(page, "04-carousel-hover");

    // Click arrow
    const arrow = page.locator('[data-name="Images"] button[aria-label="Siguiente"]');
    if (await arrow.isVisible()) {
      await arrow.click();
      await page.waitForTimeout(400);
      await snap(page, "05-carousel-after-arrow");
    }
  });

  test("Desktop — ¿Cómo gano? section scroll reveal", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await scrollToAndWait(page, "#como-gano", 1200);
    await snap(page, "06-como-gano");
  });

  test("Desktop — Elegí tu fracción - slider interaction", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await scrollToAndWait(page, "#fracciones", 1200);
    await snap(page, "07-fracciones-default");

    // Click dot 4 (5th dot = 4/8)
    const dots = page.locator('#fracciones [data-name="Slider"] button');
    const count = await dots.count();
    if (count > 4) {
      await dots.nth(4).click();
      await page.waitForTimeout(600);
      await snap(page, "08-fracciones-4of8");
    }

    // Click last dot
    if (count > 0) {
      await dots.nth(count - 1).click();
      await page.waitForTimeout(600);
      await snap(page, "09-fracciones-8of8");
    }

    // Switch to Sur tab
    const surTab = page.locator("button", { hasText: "Monoloft SUR" });
    if (await surTab.isVisible()) {
      await surTab.click();
      await page.waitForTimeout(400);
      await snap(page, "10-fracciones-sur");
    }
  });

  test("Desktop — RentaCards click interaction", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await scrollToAndWait(page, '[data-name="Cards"]', 1200);
    await snap(page, "11-rentacards-default");

    // Get card bounding box before click
    const card = page.locator('[data-name="Card1"]');
    const boxBefore = await card.boundingBox();

    // Click first card
    await card.click();
    await page.waitForTimeout(500);
    await snap(page, "12-rentacards-card1-active");

    // Verify height didn't change
    const boxAfter = await card.boundingBox();
    if (boxBefore && boxAfter) {
      expect(Math.abs(boxAfter.height - boxBefore.height)).toBeLessThan(2);
    }

    // Click again to close
    await card.click();
    await page.waitForTimeout(500);
    await snap(page, "13-rentacards-card1-closed");

    // Verify height back to original
    const boxFinal = await card.boundingBox();
    if (boxBefore && boxFinal) {
      expect(Math.abs(boxFinal.height - boxBefore.height)).toBeLessThan(2);
    }
  });

  test("Desktop — RentaCards hover feedback", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await scrollToAndWait(page, '[data-name="Cards"]', 1200);

    const card = page.locator('[data-name="Card2"]');
    await card.hover();
    await page.waitForTimeout(400);
    await snap(page, "14-rentacards-hover");
  });

  test("Desktop — El Proyecto banner", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await scrollToAndWait(page, "#proyecto", 1200);
    await snap(page, "15-proyecto-banner");
  });

  test("Desktop — Portada (Buenos Aires)", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await scrollToAndWait(page, '[data-name="Portada"]', 1200);
    await snap(page, "16-portada-ba");
  });

  test("Desktop — Gallery tabs interaction", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    // Find gallery by its arrow buttons
    const nextBtn = page.locator('button[aria-label="Siguiente"]').last();
    await nextBtn.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await snap(page, "17-gallery-tab1");

    await nextBtn.click();
    await page.waitForTimeout(600);
    await snap(page, "18-gallery-tab2");

    await nextBtn.click();
    await page.waitForTimeout(600);
    await snap(page, "19-gallery-tab3");
  });

  test("Desktop — Construction Timeline step interaction", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await scrollToAndWait(page, "#avance", 1200);
    await snap(page, "20-timeline-default");

    // Click a later step
    const steps = page.locator("#avance button").filter({ hasText: /Terminaciones|Equipamiento|Entrega/ });
    if (await steps.first().isVisible()) {
      await steps.first().click();
      await page.waitForTimeout(800);
      await snap(page, "21-timeline-later-step");
    }
  });

  test("Desktop — Map zoom on hover", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await scrollToAndWait(page, '[data-name="Map"]', 800);
    await snap(page, "22-map-default");

    const map = page.locator('[data-name="Map"]');
    await map.hover({ position: { x: 200, y: 150 } });
    await page.waitForTimeout(600);
    await snap(page, "23-map-hover-zoom");
  });

  test("Desktop — Neuquén banner", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await scrollToAndWait(page, "#neuquen", 1200);
    await snap(page, "24-neuquen-banner");
  });

  test("Desktop — Testimonials carousel", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await scrollToAndWait(page, "#testimonios", 1200);
    await snap(page, "25-testimonials");

    // Hover a testimonial card for 3D tilt
    const card = page.locator("#testimonios article").first();
    if (await card.isVisible()) {
      await card.hover({ position: { x: 30, y: 20 } });
      await page.waitForTimeout(400);
      await snap(page, "26-testimonial-tilt");
    }
  });

  test("Desktop — ¿Cómo invertir? sticky steps", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await scrollToAndWait(page, "#como-invertir", 1200);
    await snap(page, "27-como-invertir");
  });

  test("Desktop — Contact form focus glow", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await scrollToAndWait(page, "#contacto", 1200);
    await snap(page, "28-contact-form");

    // Click on first input to see focus glow
    const input = page.locator("#contacto input").first();
    if (await input.isVisible()) {
      await input.click();
      await page.waitForTimeout(400);
      await snap(page, "29-contact-form-focus");
    }
  });

  test("Desktop — Press section", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await scrollToAndWait(page, "#prensa", 1200);
    await snap(page, "30-press");
  });

  test("Desktop — Footer reveal", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    // Scroll to very bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1500);
    await snap(page, "31-footer");
  });

  test("Desktop — Sidebar nav visibility", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await snap(page, "32-sidebar-visible");

    // Scroll down to trigger hide
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.waitForTimeout(600);
    await snap(page, "33-sidebar-after-scroll-down");

    // Scroll up to trigger show
    await page.evaluate(() => window.scrollBy(0, -200));
    await page.waitForTimeout(600);
    await snap(page, "34-sidebar-after-scroll-up");
  });

  test("Desktop — Page transition to About", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    // Click Nosotros in sidebar
    const nosotros = page.locator('a[href="/about"]').first();
    if (await nosotros.isVisible()) {
      await nosotros.click();
      await page.waitForTimeout(1000);
      await snap(page, "35-about-page");
    }
  });

  test("Desktop — About page sections", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(BASE + "#/about", { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    await snap(page, "36-about-hero");

    await scrollToAndWait(page, "#historia", 1200);
    await snap(page, "37-about-historia");

    await scrollToAndWait(page, "#equipo", 1200);
    await snap(page, "38-about-equipo");
  });

  test("Desktop — Inicio link from About", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(BASE + "#/about", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    const inicio = page.locator('a[href="/"]', { hasText: "Inicio" }).first();
    if (await inicio.isVisible()) {
      await inicio.click();
      await page.waitForTimeout(1500);
      await snap(page, "39-back-to-home");
    }
  });

  // ─── MOBILE ────────────────────────────────────────────

  test("Mobile — Hero section", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(BASE, { waitUntil: "networkidle" });
    await page.waitForTimeout(2000);
    await snap(page, "40-mobile-hero");
  });

  test("Mobile — RentaCards tap interaction", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(BASE, { waitUntil: "networkidle" });
    await scrollToAndWait(page, '[data-name="Cards"]', 1200);
    await snap(page, "41-mobile-rentacards");

    const card = page.locator('[data-name="Card1"]');
    const boxBefore = await card.boundingBox();

    await card.click();
    await page.waitForTimeout(500);
    await snap(page, "42-mobile-rentacards-active");

    // Verify no height change
    const boxAfter = await card.boundingBox();
    if (boxBefore && boxAfter) {
      expect(Math.abs(boxAfter.height - boxBefore.height)).toBeLessThan(2);
    }

    await card.click();
    await page.waitForTimeout(500);
    await snap(page, "43-mobile-rentacards-closed");

    const boxFinal = await card.boundingBox();
    if (boxBefore && boxFinal) {
      expect(Math.abs(boxFinal.height - boxBefore.height)).toBeLessThan(2);
    }
  });

  test("Mobile — Fraction slider", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(BASE, { waitUntil: "networkidle" });
    await scrollToAndWait(page, "#fracciones", 1200);
    await snap(page, "44-mobile-fracciones");
  });

  test("Mobile — Full page scroll (no overflow)", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(BASE, { waitUntil: "networkidle" });

    // Check no horizontal overflow
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);

    // Scroll through entire page
    const totalHeight = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < totalHeight; y += 844) {
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
      await page.waitForTimeout(200);
    }
    await snap(page, "45-mobile-bottom");
  });

  test("Mobile — About page", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(BASE + "#/about", { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    await snap(page, "46-mobile-about");
  });
});
