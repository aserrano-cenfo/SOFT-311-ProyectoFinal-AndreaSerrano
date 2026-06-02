import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {

    async irAllProducts() {

        await this.page.getByTestId(
            'header-menu-all-products'
        ).click();

    }

    async agregarDosProductosAlCarrito() {

        const botonesCarrito =
            this.page.getByTestId(
                'all-products-cart-button'
            );

        await botonesCarrito.nth(0).click();

        await botonesCarrito.nth(1).click();

    }

    async agregarDosProductosAWishlist() {

        const botonesWishlist =
            this.page.getByTestId(
                'all-products-wishlist-button'
            );

        await botonesWishlist.nth(0).click();

        await botonesWishlist.nth(1).click();

    }

    async validarContadorCarrito() {

        await expect(
            this.page.getByTestId(
                'header-cart-count'
            )
        ).toHaveText('2');

    }

    async validarContadorWishlist() {

        await expect(
            this.page.getByTestId(
                'header-wishlist-count'
            )
        ).toHaveText('2');

    }

    async obtenerNombreProducto() {

        return await this.page.getByTestId(
            'all-products-header'
        ).first().textContent();

    }

    async obtenerPrecioProducto() {

        return await this.page.getByTestId(
            'all-products-price'
        ).first().textContent();

    }

    async abrirPrimerProducto() {

        await this.page.getByTestId(
            'all-products-header'
        ).first().click();

    }

    async validarNombreDetalle(
        nombre: string
    ) {

        await expect(
            this.page.getByTestId(
                'product-name'
            )
        ).toHaveText(nombre);

    }

    async validarPrecioDetalle(
        precio: string
    ) {

        await expect(
            this.page.getByTestId(
                'product-price'
            )
        ).toHaveText(precio);

    }

    async hacerHoverPrimerProducto() {

        await this.page.getByTestId(
            'all-products-header'
        ).first().hover();

    }

    async validarControlesProducto() {

        await expect(
            this.page.getByTestId(
                'all-products-wishlist-button'
            ).first()
        ).toBeVisible();

        await expect(
            this.page.getByTestId(
                'all-products-cart-button'
            ).first()
        ).toBeVisible();

    }

}