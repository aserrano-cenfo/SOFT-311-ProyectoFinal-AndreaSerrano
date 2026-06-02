import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class SignupPage extends BasePage {

    async hacerClicCrearCuenta() {

        await this.page.getByRole(
            'button',
            { name: 'Create Account' }
        ).click();

    }

    async ingresarFirstName(
        firstName: string
    ) {

        await this.page.getByTestId(
            'signup-firstname-input'
        ).fill(firstName);

    }

    async ingresarLastName(
        lastName: string
    ) {

        await this.page.getByTestId(
            'signup-lastname-input'
        ).fill(lastName);

    }

    async ingresarEmail(
        email: string
    ) {

        await this.page.getByTestId(
            'signup-email-input'
        ).fill(email);

    }

    async validarFirstNameRequerido() {

        await expect(
            this.page.getByText(
                'First Name is required'
            )
        ).toBeVisible();

    }

    async validarLastNameRequerido() {

        await expect(
            this.page.getByText(
                'Last Name is required'
            )
        ).toBeVisible();

    }

    async validarEmailRequerido() {

        await expect(
            this.page.getByText(
                'Email is required'
            )
        ).toBeVisible();

    }

    async validarPasswordRequerido() {

        await expect(
            this.page.getByText(
                'Password is required'
            )
        ).toBeVisible();

    }

}