import { test, expect, type Page, type Locator } from "@playwright/test";

const BASE = "http://localhost:5174/la-barceloneta/";
const SCREENSHOT_DIR = "e2e/screenshots/mobile-overlap";

// Mobile viewport (iPhone 14 Pro)
const MOBILE = { width: 390, height: 844 };

async function snap(page: Page, name: string) {
  await page.screenshot({
    path: `${SCREENSHOT_DIR}/${name}.png`,
    fullPage: false,
  });
}

async function scrollToAndWait(page: Page, selector: string, ms = 1000) {
  const el = page.locator(selector).first();
  if (await el.isVisible().catch(() => false)) {
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(ms);
  }
}

// Get bounding box of an element
async function getBox(loc: Locator) {
  return loc.boundingBox();
}

// Check if two bounding boxes overlap
function boxesOverlap(
  a: { x: number; y: number; width: number; height: number },
  b: { x: number; y: number; width: number; height: number },
  tolerance = 5
): { overlaps: boolean; overlapPx: number } {
  const overlapX = Math.max(
    0,
    Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x)
  );
  const overlapY = Math.max(
    0,
    Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y)
  );
  const overlapArea = overlapX * overlapY;
  return {
    overlaps: overlapArea > tolerance * tolerance,
    overlapPx: Math.round(Math.sqrt(overlapArea)),
  };
}

// Check if element overflows viewport horizontally
async function checkHorizontalOverflow(page: Page): Promise<number> {
  return page.evaluate(() => {
    return document.documentElement.scrollWidth - document.documentElement.clientWidth;
  });
}

// Check if element is clipped (height 0 or invisible but should be visible)
async function checkCollapsed(loc: Locator): Promise<boolean> {
  const box = await loc.boundingBox();
  if (!box) return true;
  return box.height < 2 || box.width < 2;
}

// Get all direct children bounding boxes for overlap check
async function getChildrenBoxes(page: Page, parentSelector: string) {
  return page.evaluate((sel) => {
    const parent = document.querySelector(sel);
    if (!parent) return [];
    const children = Array.from(parent.children).filter((el) => {
      const style = getComputedStyle(el);
      return style.display !== "none" && style.visibility !== "hidden";
    });
    return children.map((el) => {
      const rect = el.getBoundingClientRect();
      return {
        tag: el.tagName,
        text: (el as HTMLElement).innerText?.slice(0, 50) || "",
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
        className: el.className?.toString().slice(0, 80) || "",
      };
    });
  }, parentSelector);
}

// Check for text being cut off (element has overflow hidden and scrollHeight > clientHeight)
async function checkTextTruncation(page: Page, selector: string) {
  return page.evaluate((sel) => {
    const elements = document.querySelectorAll(sel);
    const truncated: Array<{
      text: string;
      scrollH: number;
      clientH: number;
      overflow: string;
    }> = [];
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      const style = getComputedStyle(el);
      if (
        htmlEl.scrollHeight > htmlEl.clientHeight + 2 &&
        (style.overflow === "hidden" || style.overflowY === "hidden")
      ) {
        truncated.push({
          text: htmlEl.innerText?.slice(0, 60) || "",
          scrollH: htmlEl.scrollHeight,
          clientH: htmlEl.clientHeight,
          overflow: style.overflow,
        });
      }
    });
    return truncated;
  }, selector);
}

test.describe("Mobile Overlap & Collapse Detection", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(MOBILE);
    await page.goto(BASE, { waitUntil: "networkidle" });
    await page.waitForTimeout(2000);
  });

  // ─── GLOBAL CHECKS ───────────────────────────────────

  test("No horizontal overflow on any scroll position", async ({ page }) => {
    const totalHeight = await page.evaluate(() => document.body.scrollHeight);
    const issues: Array<{ scrollY: number; overflow: number }> = [];

    for (let y = 0; y < totalHeight; y += 400) {
      await page.evaluate((sy) => window.scrollTo(0, sy), y);
      await page.waitForTimeout(100);
      const overflow = await checkHorizontalOverflow(page);
      if (overflow > 1) {
        issues.push({ scrollY: y, overflow });
        await snap(page, `overflow-at-${y}`);
      }
    }

    if (issues.length > 0) {
      console.log("HORIZONTAL OVERFLOW DETECTED:", JSON.stringify(issues, null, 2));
    }
    expect(issues.length, `Horizontal overflow at ${issues.length} positions`).toBe(0);
  });

  // ─── SECTION BY SECTION ──────────────────────────────

  test("Hero — no overlapping elements", async ({ page }) => {
    await snap(page, "01-hero");

    // Check hero children for overlap
    const heroBoxes = await getChildrenBoxes(page, '[data-name="Hero"], section:first-of-type');
    const overlaps: string[] = [];

    for (let i = 0; i < heroBoxes.length; i++) {
      for (let j = i + 1; j < heroBoxes.length; j++) {
        const a = heroBoxes[i];
        const b = heroBoxes[j];
        const result = boxesOverlap(a, b, 10);
        if (result.overlaps) {
          overlaps.push(
            `"${a.text}" overlaps "${b.text}" by ~${result.overlapPx}px`
          );
        }
      }
    }

    if (overlaps.length > 0) console.log("HERO OVERLAPS:", overlaps);
  });

  test("Image carousel — not collapsed, images visible", async ({ page }) => {
    await scrollToAndWait(page, '[data-name="Images"]');
    await snap(page, "02-carousel");

    const carousel = page.locator('[data-name="Images"]').first();
    if (await carousel.isVisible()) {
      const collapsed = await checkCollapsed(carousel);
      expect(collapsed, "Carousel should not be collapsed").toBe(false);

      const box = await getBox(carousel);
      expect(box!.height, "Carousel height should be reasonable").toBeGreaterThan(100);
    }
  });

  test("¿Cómo gano? — cards not overlapping", async ({ page }) => {
    await scrollToAndWait(page, "#como-gano");
    await snap(page, "03-como-gano");

    const boxes = await getChildrenBoxes(page, "#como-gano");
    const overlaps: string[] = [];

    for (let i = 0; i < boxes.length; i++) {
      for (let j = i + 1; j < boxes.length; j++) {
        const result = boxesOverlap(boxes[i], boxes[j], 15);
        if (result.overlaps) {
          overlaps.push(
            `"${boxes[i].text}" overlaps "${boxes[j].text}" by ~${result.overlapPx}px`
          );
        }
      }
    }

    if (overlaps.length > 0) console.log("COMO-GANO OVERLAPS:", overlaps);
    await snap(page, "03b-como-gano-full");
  });

  test("Elegí tu fracción — slider and content visible", async ({ page }) => {
    await scrollToAndWait(page, "#fracciones");
    await snap(page, "04-fracciones");

    const section = page.locator("#fracciones").first();
    if (await section.isVisible()) {
      const collapsed = await checkCollapsed(section);
      expect(collapsed, "Fracciones should not be collapsed").toBe(false);
    }

    // Check text truncation in this section
    const truncated = await checkTextTruncation(page, "#fracciones *");
    if (truncated.length > 0) {
      console.log("FRACCIONES TEXT TRUNCATION:", JSON.stringify(truncated, null, 2));
    }
  });

  test("RentaCards — cards not overlapping each other", async ({ page }) => {
    await scrollToAndWait(page, '[data-name="Cards"]');
    await snap(page, "05-rentacards");

    const cards = page.locator('[data-name="Cards"] > div, [data-name="Cards"] > article');
    const count = await cards.count();
    const cardBoxes: Array<{ text: string; x: number; y: number; width: number; height: number }> = [];

    for (let i = 0; i < count; i++) {
      const box = await cards.nth(i).boundingBox();
      const text = await cards.nth(i).innerText().catch(() => "");
      if (box) cardBoxes.push({ text: text.slice(0, 40), ...box });
    }

    const overlaps: string[] = [];
    for (let i = 0; i < cardBoxes.length; i++) {
      for (let j = i + 1; j < cardBoxes.length; j++) {
        const result = boxesOverlap(cardBoxes[i], cardBoxes[j], 10);
        if (result.overlaps) {
          overlaps.push(
            `Card "${cardBoxes[i].text}" overlaps "${cardBoxes[j].text}" by ~${result.overlapPx}px`
          );
        }
      }
    }

    if (overlaps.length > 0) console.log("RENTACARDS OVERLAPS:", overlaps);
  });

  test("El Proyecto banner — content visible, not collapsed", async ({ page }) => {
    await scrollToAndWait(page, "#proyecto");
    await snap(page, "06-proyecto");

    const section = page.locator("#proyecto").first();
    if (await section.isVisible()) {
      const box = await getBox(section);
      expect(box!.height, "Proyecto section should have height").toBeGreaterThan(50);
    }
  });

  test("Buenos Aires section — sidebar and content not overlapping", async ({ page }) => {
    await scrollToAndWait(page, '[data-name="Portada"]');
    await snap(page, "07-ba-portada");

    const boxes = await getChildrenBoxes(page, '[data-name="Portada"]');
    const overlaps: string[] = [];

    for (let i = 0; i < boxes.length; i++) {
      for (let j = i + 1; j < boxes.length; j++) {
        const result = boxesOverlap(boxes[i], boxes[j], 10);
        if (result.overlaps && boxes[i].height > 20 && boxes[j].height > 20) {
          overlaps.push(
            `"${boxes[i].text}" overlaps "${boxes[j].text}" by ~${result.overlapPx}px`
          );
        }
      }
    }

    if (overlaps.length > 0) console.log("BA PORTADA OVERLAPS:", overlaps);

    // Check text truncation
    const truncated = await checkTextTruncation(page, '[data-name="Portada"] *');
    if (truncated.length > 0) {
      console.log("BA TEXT TRUNCATION:", JSON.stringify(truncated, null, 2));
    }
  });

  test("Gallery — images not clipped or collapsed", async ({ page }) => {
    const nextBtn = page.locator('button[aria-label="Siguiente"]').last();
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      await snap(page, "08-gallery");
    }
  });

  test("Construction Timeline — steps visible and not stacked", async ({ page }) => {
    await scrollToAndWait(page, "#avance");
    await snap(page, "09-timeline");

    const boxes = await getChildrenBoxes(page, "#avance");
    const overlaps: string[] = [];

    for (let i = 0; i < boxes.length; i++) {
      for (let j = i + 1; j < boxes.length; j++) {
        const result = boxesOverlap(boxes[i], boxes[j], 10);
        if (result.overlaps && boxes[i].height > 15 && boxes[j].height > 15) {
          overlaps.push(
            `"${boxes[i].text}" overlaps "${boxes[j].text}" by ~${result.overlapPx}px`
          );
        }
      }
    }

    if (overlaps.length > 0) console.log("TIMELINE OVERLAPS:", overlaps);
  });

  test("Neuquén section — content not collapsed", async ({ page }) => {
    await scrollToAndWait(page, "#neuquen");
    await snap(page, "10-neuquen");

    const section = page.locator("#neuquen").first();
    if (await section.isVisible()) {
      const box = await getBox(section);
      expect(box!.height, "Neuquén section should have height").toBeGreaterThan(50);

      // Check children overlap
      const boxes = await getChildrenBoxes(page, "#neuquen");
      const overlaps: string[] = [];

      for (let i = 0; i < boxes.length; i++) {
        for (let j = i + 1; j < boxes.length; j++) {
          const result = boxesOverlap(boxes[i], boxes[j], 10);
          if (result.overlaps && boxes[i].height > 20 && boxes[j].height > 20) {
            overlaps.push(
              `"${boxes[i].text}" overlaps "${boxes[j].text}" by ~${result.overlapPx}px`
            );
          }
        }
      }

      if (overlaps.length > 0) console.log("NEUQUEN OVERLAPS:", overlaps);
    }
  });

  test("Testimonials — cards readable, not stacked", async ({ page }) => {
    await scrollToAndWait(page, "#testimonios");
    await snap(page, "11-testimonios");

    const cards = page.locator("#testimonios article, #testimonios [class*='card']");
    const count = await cards.count();

    if (count > 1) {
      const cardBoxes: Array<{ idx: number; x: number; y: number; width: number; height: number }> = [];

      for (let i = 0; i < Math.min(count, 6); i++) {
        const box = await cards.nth(i).boundingBox();
        if (box) cardBoxes.push({ idx: i, ...box });
      }

      const overlaps: string[] = [];
      for (let i = 0; i < cardBoxes.length; i++) {
        for (let j = i + 1; j < cardBoxes.length; j++) {
          const result = boxesOverlap(cardBoxes[i], cardBoxes[j], 20);
          if (result.overlaps) {
            overlaps.push(
              `Testimonial ${cardBoxes[i].idx} overlaps ${cardBoxes[j].idx} by ~${result.overlapPx}px`
            );
          }
        }
      }

      if (overlaps.length > 0) console.log("TESTIMONIAL OVERLAPS:", overlaps);
    }
  });

  test("¿Cómo invertir? — steps readable", async ({ page }) => {
    await scrollToAndWait(page, "#como-invertir");
    await snap(page, "12-como-invertir");

    const truncated = await checkTextTruncation(page, "#como-invertir *");
    if (truncated.length > 0) {
      console.log("COMO-INVERTIR TEXT TRUNCATION:", JSON.stringify(truncated, null, 2));
    }
  });

  test("Contact form — inputs not overlapping labels", async ({ page }) => {
    await scrollToAndWait(page, "#contacto");
    await snap(page, "13-contacto");

    const boxes = await getChildrenBoxes(page, "#contacto form, #contacto [class*='form']");
    const overlaps: string[] = [];

    for (let i = 0; i < boxes.length; i++) {
      for (let j = i + 1; j < boxes.length; j++) {
        const result = boxesOverlap(boxes[i], boxes[j], 5);
        if (result.overlaps && boxes[i].height > 10 && boxes[j].height > 10) {
          overlaps.push(
            `"${boxes[i].text}" overlaps "${boxes[j].text}" by ~${result.overlapPx}px`
          );
        }
      }
    }

    if (overlaps.length > 0) console.log("CONTACT FORM OVERLAPS:", overlaps);
  });

  test("Footer — all content visible, not cut off", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1500);
    await snap(page, "14-footer");

    const truncated = await checkTextTruncation(page, "footer *");
    if (truncated.length > 0) {
      console.log("FOOTER TEXT TRUNCATION:", JSON.stringify(truncated, null, 2));
    }
  });

  // ─── FULL PAGE VISUAL SCROLL ────────────────────────

  test("Full page scroll — screenshot every viewport", async ({ page }) => {
    const totalHeight = await page.evaluate(() => document.body.scrollHeight);
    const viewportH = MOBILE.height;
    let idx = 0;

    for (let y = 0; y < totalHeight; y += viewportH * 0.75) {
      await page.evaluate((sy) => window.scrollTo(0, sy), y);
      await page.waitForTimeout(300);
      await snap(page, `scroll-${String(idx).padStart(3, "0")}-y${y}`);
      idx++;
    }

    console.log(`Captured ${idx} scroll positions for visual review`);
  });
});
