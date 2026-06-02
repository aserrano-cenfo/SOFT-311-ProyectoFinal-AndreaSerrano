import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';

test('TC007 - Agregar productos al carrito', async ({ page }) => {

  const home = new HomePage(page);
  const products = new ProductsPage(page);

  await home.irHome();

  await products.irAllProducts();

  await products.agregarDosProductosAlCarrito();

  await products.validarContadorCarrito();

  await products.tomarScreenshot(
    'TC007_ContadorCarrito'
  );

});