# Automatización Cypress – Sistema Sanitario

## Descripción

Este proyecto contiene ejemplos de automatización con Cypress aplicados a un sistema sanitario anonimizado.

Se cubren flujos como:
- autenticación
- selección de contexto clínico
- navegación a agenda
- búsqueda de cita de paciente en tabla
- validación de estado visible

## Técnicas utilizadas

- Custom commands
- Fixtures
- Intercepts
- Validación de respuestas HTTP
- Recorrido de tablas
- Aserciones sobre contenido dinámico

## Estructura

- `cypress/e2e/clinical-agenda.cy.js`: escenario principal
- `cypress/support/commands.js`: comandos reutilizables
- `cypress/fixtures/appointment-data.json`: datos de prueba

## Nota

Todo el contenido fue anonimizado para evitar exposición de información sensible del sistema real.
