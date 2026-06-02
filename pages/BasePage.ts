import { Page } from '@playwright/test';

export class BasePage {

  page: Page;

  constructor(page: Page) {

    this.page = page;

  }

async tomarScreenshot(
  nombreArchivo: string
) {

  const browserName =
    this.page.context().browser()?.browserType().name();

  if (browserName !== 'chromium') {
    return;
  }

  await this.page.screenshot({
    path: `screenshots/${nombreArchivo}.png`,
    fullPage: true
  });

}

}