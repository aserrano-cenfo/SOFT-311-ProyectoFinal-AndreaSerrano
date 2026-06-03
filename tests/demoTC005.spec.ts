import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';

test('DEMO TC005 - Comparación entre listado y detalle', async ({ page }) => {

  const home = new HomePage(page);
  const products = new ProductsPage(page);

  await home.irHome();

  await page.pause();

  await products.irAllProducts();

  await page.pause();

  const nombreProducto =
    await products.obtenerNombreProducto();

  const precioProducto =
    await products.obtenerPrecioProducto();

  await page.pause();

  await products.abrirPrimerProducto();

  await page.pause();

  await products.validarNombreDetalle(
    nombreProducto ?? ''
  );

  await products.validarPrecioDetalle(
    precioProducto ?? ''
  );

  await page.pause();

  await products.tomarScreenshot(
    'DEMO_TC005_DetalleProducto'
  );

});