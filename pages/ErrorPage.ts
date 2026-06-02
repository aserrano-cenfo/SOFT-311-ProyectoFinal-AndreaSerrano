import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ErrorPage extends BasePage {

  async validarPagina404() {

    await expect(
      this.page.getByTestId(
        'error-page-title'
      )
    ).toHaveText('404');

    await expect(
      this.page.getByTestId(
        'error-page-heading'
      )
    ).toHaveText('Page not found');

  }

  async volverHome() {

    await this.page.getByRole(
      'link',
      { name: 'Go back home' }
    ).click();

  }

}