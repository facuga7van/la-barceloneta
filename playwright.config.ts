import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 30000,
  use: {
    baseURL: "http://localhost:5174/la-barceloneta/",
    screenshot: "off", // We take manual screenshots
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
});
