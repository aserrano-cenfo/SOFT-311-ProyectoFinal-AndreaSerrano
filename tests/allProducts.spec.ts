import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';

test('TC004 - Validación de información de productos', async ({ page }) => {

  const home = new HomePage(page);
  const products = new ProductsPage(page);

  await home.irHome();

  await products.irAllProducts();

  await expect(
    page.getByTestId(
      'all-products-header'
    ).first()
  ).toBeVisible();

  await expect(
    page.getByTestId(
      'all-products-price'
    ).first()
  ).toBeVisible();

  await products.hacerHoverPrimerProducto();

  await products.validarControlesProducto();

  await products.tomarScreenshot(
    'TC004_InfoProductos'
  );

});

test('TC005 - Comparación entre listado y detalle', async ({ page }) => {

  const home = new HomePage(page);
  const products = new ProductsPage(page);

  await home.irHome();

  await products.irAllProducts();

  const nombreProducto =
    await products.obtenerNombreProducto();

  const precioProducto =
    await products.obtenerPrecioProducto();

  await products.abrirPrimerProducto();

  await products.validarNombreDetalle(
    nombreProducto ?? ''
  );

  await products.validarPrecioDetalle(
    precioProducto ?? ''
  );

  await products.tomarScreenshot(
    'TC005_DetalleProducto'
  );

});