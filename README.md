# Proyecto Final - Automatización de Pruebas con Playwright

## Descripción

Proyecto de automatización de pruebas funcionales desarrollado utilizando Playwright con TypeScript y el patrón de diseño Page Object Model (POM).

El proyecto automatiza casos de prueba para el sitio web:

https://storedemo.testdino.com/

Las pruebas cubren funcionalidades de Home, About Us, Contact Us, All Products, Login, Sign Up, Cart y Favorites.

---

## Tecnologías Utilizadas

* Playwright
* TypeScript
* Node.js
* Page Object Model (POM)

---

## Estructura del Proyecto

```text
PROYECTO_FINAL_ANDREA_SERRANO
│
├── config
│   └── urls.ts
│
├── pages
│   ├── AboutPage.ts
│   ├── BasePage.ts
│   ├── ContactPage.ts
│   ├── ErrorPage.ts
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   └── SignupPage.ts
│
├── screenshots
│
├── test-results
│
├── playwright-report
│
├── tests
│   ├── about.spec.ts
│   ├── allProducts.spec.ts
│   ├── cart.spec.ts
│   ├── contact.spec.ts
│   ├── demoTC005.spec.ts
│   ├── favorites.spec.ts
│   ├── home.spec.ts
│   ├── login.spec.ts
│   └── signUp.spec.ts
│
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

---

## Implementación de POM

El proyecto utiliza el patrón de diseño Page Object Model (POM) para separar la lógica de las páginas de los casos de prueba.

Cada página contiene sus propios selectores y métodos de interacción, mientras que los archivos de prueba contienen únicamente el flujo de ejecución del caso de prueba.

La clase `BasePage` centraliza funcionalidades reutilizables compartidas por todas las páginas, como la captura de screenshots.

---

## Casos de Prueba Automatizados

| ID    | Caso de Prueba                                    |
| ----- | ------------------------------------------------- |
| TC001 | Navegación del carrusel de productos destacados   |
| TC002 | Validación del contenido corporativo              |
| TC003 | Envío exitoso de consulta                         |
| TC004 | Validación de información de productos            |
| TC005 | Comparación entre listado y detalle               |
| TC006 | Redirección correcta después del inicio de sesión |
| TC007 | Actualización del contador del carrito            |
| TC008 | Agregar múltiples productos al wishlist           |
| TC009 | Acceso a URL inexistente                          |
| TC010 | Inicio de sesión con contraseña incorrecta        |
| TC011 | Registro con campos obligatorios vacíos           |
| TC012 | Envío con campo obligatorio vacío                 |
| TC013 | Mensaje menor a 10 caracteres                     |

---

## Evidencias

Las capturas de pantalla generadas durante la ejecución de las pruebas se almacenan en la carpeta:

```text
screenshots/
```

Las capturas se generan únicamente durante la ejecución en Chromium para evitar duplicación de evidencias entre navegadores.

---

## Reporte de Ejecución

El proyecto incluye un reporte HTML generado por Playwright dentro de la carpeta:

```text
playwright-report/
```

También es posible generar o abrir un nuevo reporte mediante:

```bash
npx playwright show-report
```

---

## Ejecución del Proyecto

### Instalar dependencias

```bash
npm install
```

### Instalar navegadores de Playwright

```bash
npx playwright install
```

### Ejecutar todas las pruebas

```bash
npx playwright test
```

### Ejecutar una prueba específica

```bash
npx playwright test tests/login.spec.ts
```

### Ejecutar una prueba específica en Chromium

```bash
npx playwright test tests/login.spec.ts --project=chromium
```

### Ejecutar la demostración utilizada durante la defensa del proyecto

```bash
npx playwright test tests/demoTC005.spec.ts --headed --project=chromium
```

---

## Autor

Andrea Serrano

Proyecto Final – Automatización de Pruebas Web con Playwright y TypeScript