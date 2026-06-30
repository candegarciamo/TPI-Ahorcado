# TPI - Juego del Ahorcado

Este es el Trabajo Práctico Integrador del juego del Ahorcado, desarrollado con la metodología **ATDD (Acceptance Test Driven Development)**.

## Link al Juego
🔗 **[Juego del Ahorcado Online](https://tpi-ahorcado.vercel.app/)**

## Reporte de Cobertura de Tests

El análisis de calidad de código y cobertura es generado por **GitHub Actions** mediante **SonarCloud**.

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=candegarciamo_TPI-Ahorcado&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=candegarciamo_TPI-Ahorcado)

El reporte unificado de cobertura de los tests unitarios y de integración se genera y publica automáticamente en cada cambio a la rama principal en **GitHub Pages**.

🔗 **[Ver Resultados de Cobertura de Tests (Coverage)](https://candegarciamo.github.io/TPI-Ahorcado/)**

---

## Scripts Disponibles

En este proyecto puedes utilizar los siguientes comandos:

- `pnpm run dev`: Inicia el servidor de desarrollo local con Vite.
- `pnpm run test`: Corre los tests unitarios de la clase `Ahorcado` usando Jest.
- `pnpm run at`: Genera y ejecuta los tests de aceptación / integración con Playwright y Gherkin.
- `pnpm run test:coverage`: Ejecuta la suite completa de tests, recolecta la cobertura unificada (unit + integración) y genera el reporte HTML en la carpeta `coverage`.
