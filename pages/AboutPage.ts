import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AboutPage extends BasePage {

  async irAboutUs() {

    await this.page.getByTestId(
      'header-menu-about-us'
    ).click();

  }

  async validarTituloAboutUs() {

    await expect(
      this.page.getByTestId('about-us-title')
    ).toHaveText('About Us');

  }

}