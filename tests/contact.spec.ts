import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';

test('TC003 - Envío exitoso de consulta', async ({ page }) => {

    const home = new HomePage(page);
    const contact = new ContactPage(page);

    await home.irHome();

    await contact.irContactUs();

    await contact.llenarFormularioContacto(
        'Andrea',
        'Serrano',
        'Consulta',
        'Este es un mensaje de prueba válido.'
    );

    await contact.enviarMensaje();

    await contact.validarMensajeEnviado();

    await contact.tomarScreenshot(
        'TC003_ContactoExitoso'
    );

});

test('TC012 - Envío con campo obligatorio vacío', async ({ page }) => {

    const home = new HomePage(page);
    const contact = new ContactPage(page);

    await home.irHome();

    await contact.irContactUs();

    await contact.llenarFormularioContacto(
        'Andrea',
        '',
        'Consulta',
        'Este es un mensaje válido.'
    );

    await contact.enviarMensaje();

    await contact.validarErrorLastNameRequerido();

    await contact.tomarScreenshot(
        'TC012_CampoObligatorioVacio'
    );

});

test('TC013 - Mensaje menor a 10 caracteres', async ({ page }) => {

    const home = new HomePage(page);
    const contact = new ContactPage(page);

    await home.irHome();

    await contact.irContactUs();

    await contact.llenarFormularioContacto(
        'Andrea',
        'Serrano',
        'Consulta',
        'Hola'
    );

    await contact.enviarMensaje();

    await contact.validarErrorMensajeMuyCorto();

    await contact.tomarScreenshot(
        'TC013_MensajeCorto'
    );

});