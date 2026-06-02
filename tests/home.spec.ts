import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ErrorPage } from '../pages/ErrorPage';

test('TC001 - Navegación del carrusel de productos destacados', async ({ page }) => {

  const home = new HomePage(page);

  await home.irHome();

  await expect(
    page.getByTestId('featured-products-section')
  ).toBeVisible();

  await page
    .getByTestId('featured-products-section')
    .getByRole('img', { name: 'right' })
    .click();

  await page.waitForTimeout(500);

  await page
    .getByTestId('featured-products-section')
    .getByRole('img', { name: 'left' })
    .click();

  await page.waitForTimeout(500);

  await expect(
    page.getByTestId('featured-products-section')
  ).toBeVisible();

  await home.tomarScreenshot(
    'TC001_CarruselHome'
  );

});

test('TC009 - Acceso a URL inexistente', async ({ page }) => {

  const errorPage = new ErrorPage(page);

  await page.goto(
    'https://storedemo.testdino.com/pagina-inexistente'
  );

  await errorPage.validarPagina404();

  await errorPage.volverHome();

  await expect(page).toHaveURL(
    'https://storedemo.testdino.com/'
  );

  await errorPage.tomarScreenshot(
    'TC009_Error404'
  );

});