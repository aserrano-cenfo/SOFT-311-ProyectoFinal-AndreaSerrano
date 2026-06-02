import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';

test('TC008 - Agregar productos a wishlist', async ({ page }) => {

  const home = new HomePage(page);
  const products = new ProductsPage(page);

  await home.irHome();

  await products.irAllProducts();

  await products.agregarDosProductosAWishlist();

  await products.validarContadorWishlist();

  await products.tomarScreenshot(
    'TC008_Wishlist'
  );

});