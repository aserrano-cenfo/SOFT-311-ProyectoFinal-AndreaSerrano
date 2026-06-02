import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';

test('TC011 - Registro con campos obligatorios vacíos', async ({ page }) => {

  const home = new HomePage(page);
  const login = new LoginPage(page);
  const signup = new SignupPage(page);

  await home.irHome();

  await login.abrirLogin();

  await login.irSignUp();

  await signup.hacerClicCrearCuenta();

  await signup.validarFirstNameRequerido();

  await signup.ingresarFirstName(
    'John'
  );

  await signup.hacerClicCrearCuenta();

  await signup.validarLastNameRequerido();

  await signup.ingresarLastName(
    'Doe'
  );

  await signup.hacerClicCrearCuenta();

  await signup.validarEmailRequerido();

  await signup.ingresarEmail(
    'j.doe@testing.com'
  );

  await signup.hacerClicCrearCuenta();

  await signup.validarPasswordRequerido();

  await signup.tomarScreenshot(
    'TC011_SignUpCamposVacios'
  );

});