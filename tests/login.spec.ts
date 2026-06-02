import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test('TC006 - Redirección correcta después del inicio de sesión', async ({ page }) => {

  const home = new HomePage(page);
  const login = new LoginPage(page);

  await home.irHome();

  await login.abrirLogin();

  await login.iniciarSesion(
    'aserrano@ucenfotec.ac.cr',
    'Testing123!'
  );

  await login.validarLoginExitoso();

  await expect(page).toHaveURL(
    'https://storedemo.testdino.com/'
  );

  await login.tomarScreenshot(
    'TC006_LoginExitoso'
  );

});

test('TC010 - Inicio de sesión con contraseña incorrecta', async ({ page }) => {

  const home = new HomePage(page);
  const login = new LoginPage(page);

  await home.irHome();

  await login.abrirLogin();

  await login.iniciarSesion(
    'aserrano@ucenfotec.a.cr',
    'BadPassword123!'
  );

  await login.validarCredencialesInvalidas();

  await login.tomarScreenshot(
    'TC010_LoginInvalido'
  );

});