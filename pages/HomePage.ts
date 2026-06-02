import { BasePage } from './BasePage';
import { URLS } from '../config/urls';

export class HomePage extends BasePage {

  async irHome() {

    await this.page.goto(URLS.HOME);

  }

}