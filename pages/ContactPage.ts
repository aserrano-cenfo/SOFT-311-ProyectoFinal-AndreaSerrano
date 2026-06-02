import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContactPage extends BasePage {

  async irContactUs() {

    await this.page.getByTestId(
      'header-menu-contact-us'
    ).click();

  }

  async llenarFormularioContacto(
    firstName: string,
    lastName: string,
    subject: string,
    message: string
  ) {

    await this.page.getByTestId(
      'contact-us-first-name-input'
    ).fill(firstName);

    await this.page.getByTestId(
      'contact-us-last-name-input'
    ).fill(lastName);

    await this.page.getByTestId(
      'contact-us-subject-input'
    ).fill(subject);

    await this.page.getByTestId(
      'contact-us-message-input'
    ).fill(message);

  }

  async enviarMensaje() {

    await this.page.getByTestId(
      'contact-us-submit-button'
    ).click();

  }

  async validarMensajeEnviado() {

    await expect(
      this.page.getByTestId(
        'contact-us-success-message'
      )
    ).toHaveText(
      'Your message has been sent successfully!'
    );

  }

  async validarErrorLastNameRequerido() {

    await expect(
      this.page.getByText(
        'Last Name is required.'
      )
    ).toBeVisible();
  }

  async validarErrorMensajeMuyCorto() {

    await expect(
      this.page.getByTestId(
        'contact-us-message-error'
      )
    ).toHaveText(
      'Message must be at least 10 characters.'
    );

  }

}