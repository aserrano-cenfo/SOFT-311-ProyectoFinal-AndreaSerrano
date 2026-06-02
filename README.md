# Proyecto Final - Automatización Web con Playwright y TypeScript

## Descripción

Este proyecto contiene la automatización de pruebas funcionales para la aplicación web:

https://storedemo.testdino.com/

Las pruebas fueron desarrolladas utilizando Playwright y TypeScript siguiendo el patrón de diseño Page Object Model (POM).

El objetivo del proyecto es validar los principales flujos funcionales de la aplicación mediante casos de prueba automatizados ejecutables en múltiples navegadores.

---

## Tecnologías utilizadas

* Node.js
* TypeScript
* Playwright
* Visual Studio Code

---

## Patrón de diseño utilizado

El proyecto implementa el patrón **Page Object Model (POM)** para mejorar la mantenibilidad, reutilización y organización del código.

Cada página de la aplicación cuenta con una clase específica que encapsula sus elementos y acciones.

---

## Estructura del proyecto

```text
Proyecto_Final_Andrea_Serrano/
│
├── config/
│   └── urls.ts
│
├── pages/
│   ├── AboutPage.ts
│   ├── BasePage.ts
│   ├── ContactPage.ts
│   ├── ErrorPage.ts
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   └── SignupPage.ts
│
├── playwright-report/
│   ├── index.html
│
├── screenshots/
│
├── tests/
│   ├── about.spec.ts
│   ├── allProducts.spec.ts
│   ├── cart.spec.ts
│   ├── contact.spec.ts
│   ├── favorites.spec.ts
│   ├── home.spec.ts
│   ├── login.spec.ts
│   └── signUp.spec.ts
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```


---

## Casos de prueba automatizados

| ID    | Caso de prueba                                            |
| ----- | --------------------------------------------------------- |
| TC001 | Home – Navegación del Carrusel de Productos Destacados    |
| TC002 | About Us – Validación del Contenido Corporativo           |
| TC003 | Contact Us – Envío Exitoso de Consulta                    |
| TC004 | All Products – Validación de Información de Productos     |
| TC005 | All Products – Comparación entre Listado y Detalle        |
| TC006 | Login – Redirección Correcta después del Inicio de Sesión |
| TC007 | Cart – Actualización del Contador del Carrito             |
| TC008 | Favorites – Agregar Múltiples Productos al Wishlist       |
| TC009 | Home – Acceso a URL Inexistente                           |
| TC010 | Login – Inicio de Sesión con Contraseña Incorrecta        |
| TC011 | Sign Up – Registro con Campos Obligatorios Vacíos         |
| TC012 | Contact Us – Envío con Campo Obligatorio Vacío            |
| TC013 | Contact Us – Mensaje Menor a 10 Caracteres                |

---

## Instalación

Clonar el repositorio:

```bash
git clone <url-del-repositorio>
```

Ingresar al proyecto:

```bash
cd Proyecto_Final_Andrea_Serrano
```

Instalar dependencias:

```bash
npm install
```

Instalar los navegadores de Playwright:

```bash
npx playwright install
```

---

## Ejecución de pruebas

Ejecutar todas las pruebas:

```bash
npx playwright test
```

Ejecutar pruebas en Chromium:

```bash
npx playwright test --project=chromium
```

Ejecutar pruebas en Firefox:

```bash
npx playwright test --project=firefox
```

Ejecutar pruebas en WebKit:

```bash
npx playwright test --project=webkit
```

Ejecutar pruebas con navegador visible:

```bash
npx playwright test --headed
```

---

## Datos de prueba

Para los casos relacionados con autenticación se utilizó:

- Usuario: aserrano@ucenfotec.ac.cr
- Contraseña: Testing123!

---

## Reporte de resultados

Playwright genera automáticamente un reporte HTML con los resultados de ejecución.

Para abrir el reporte:

```bash
npx playwright show-report
```

---

## Capturas de pantalla

El proyecto genera capturas de pantalla de los casos de prueba exitosos mediante un método reutilizable implementado en la clase `BasePage`.

Las imágenes se almacenan automáticamente en la carpeta:

```text
screenshots/
```

Para evitar archivos duplicados al ejecutar la suite en múltiples navegadores, las capturas se generan únicamente durante la ejecución en Chromium.

Ejemplo:

```text
screenshots/
├── TC001_CarruselHome_01-45-12.png
├── TC002_AboutUs_01-45-20.png
├── TC003_ContactoExitoso_01-45-28.png
```

---

## Navegadores soportados

Las pruebas están configuradas para ejecutarse en los siguientes navegadores:

* Chromium
* Firefox
* WebKit

---

## Autor

Andrea Serrano

Proyecto Final – Automatización de Pruebas Web con Playwright y TypeScript