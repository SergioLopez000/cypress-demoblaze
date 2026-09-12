# cypress_demoblaze

Cypress E2E suite for [demoblaze.com](https://www.demoblaze.com/), using Page Object Model.


The suite follows the Page Object Model: DOM selectors stay private inside each page class, only actions are exposed, and shared navbar behavior lives in an abstract BasePage that every page extends.

Product prices are fetched dynamically at runtime instead of hardcoded, so the suite keeps working if prices change.

Path aliases (`@pages/*`, `@support/*`, `@fixtures/*`, from `tsconfig.json`) keep imports stable regardless of how deep a file lives, instead of
relying on fragile relative paths like `../../pages/HomePage`.

ESLint is configured with TypeScript and Cypress-specific rules, plus a file-naming conventio(PascalCase for page objects, camelCase elsewhere) to prevent casing mismatches between files and their imports.


Allure is integrated via allure-cypress to generate a browsable HTML test report (steps, duration,status) instead of relying only on raw terminal output.

## Requirements

- Node.js
- Java (required by `allure-commandline` to generate reports)

## Install

```bash
npm install
```

## Run tests

```bash
npm run cy:open          # interactive runner
npm run cy:run            # headless (Electron)
npm run cy:run:chrome     # headless (Chrome)
npm run cy:run:firefox    # headless (Firefox)
```

## Lint

```bash
npm run lint
npm run lint:fix
```

## Allure reports

```bash
npm run cy:run
npm run allure:generate
npm run allure:open
```

## Structure

```
cypress/
  e2e/         test specs
  pages/       page objects (BasePage + HomePage, ProductPage, CartPage)
  support/     custom commands, global hooks, utils
  fixtures/    test data
```

Path aliases `@pages/*`, `@support/*`, `@fixtures/*` are available (see `tsconfig.json`).
