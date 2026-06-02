import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    async abrirLogin() {

        await this.page.getByTestId(
            'header-user-icon'
        ).click();

    }

    async iniciarSesion(
        email: string,
        password: string
    ) {

        await this.page.getByTestId(
            'login-email-input'
        ).fill(email);

        await this.page.getByTestId(
            'login-password-input'
        ).fill(password);

        await this.page.getByTestId(
            'login-submit-button'
        ).click();

    }

    async validarCredencialesInvalidas() {

        await expect(
            this.page.getByText(
                'Invalid credentials'
            )
        ).toBeVisible();

    }

    async irSignUp() {

        await this.page.getByTestId(
            'login-signup-link'
        ).click();

    }

    async validarLoginExitoso() {

        const mensaje = this.page.locator(
            '[role="status"]'
        );

        await expect(
            mensaje
        ).toContainText(
            'Logged in successfully',
            {
                timeout: 3000
            }
        );

    }

}