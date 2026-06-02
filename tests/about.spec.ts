import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';

test('TC002 - Validación del contenido corporativo', async ({ page }) => {

  const home = new HomePage(page);
  const about = new AboutPage(page);

  await home.irHome();

  await about.irAboutUs();

  await about.validarTituloAboutUs();

  await about.tomarScreenshot(
    'TC002_AboutUs'
  );

});