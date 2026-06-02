import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test('TC011 - Registro con campos obligatorios vacíos', async ({ page }) => {

  const home = new HomePage(page);
  const login = new LoginPage(page);

  await home.irHome();

  await login.abrirLogin();

  await login.irSignUp();

  await login.crearCuentaVacia();

  await login.validarFirstNameRequerido();

  await login.tomarScreenshot(
    'TC011_SignUpCamposVacios'
  );

});