import { createBdd } from "playwright-bdd";
import * as fs from "fs";
import * as path from "path";

const { After } = createBdd();

After(async ({ page }) => {
  const coverage = await page.evaluate(() => (window as any).__coverage__);
  if (coverage) {
    const nycOutputDir = path.join(process.cwd(), ".nyc_output");
    if (!fs.existsSync(nycOutputDir)) {
      fs.mkdirSync(nycOutputDir, { recursive: true });
    }
    const filename = `playwright-${Date.now()}-${Math.random().toString(36).substring(2, 11)}.json`;
    fs.writeFileSync(
      path.join(nycOutputDir, filename),
      JSON.stringify(coverage)
    );
  }
});
