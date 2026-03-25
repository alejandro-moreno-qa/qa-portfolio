# Test Plan – Gestión de Antecedentes Clínicos

## 1. Objetivo

Validar el correcto funcionamiento del módulo de gestión de antecedentes clínicos y medicamentos actuales dentro de un sistema de gestión hospitalaria.

---

## 2. Alcance

Se incluyen pruebas sobre:

- Registro de antecedentes clínicos
- Gestión de medicamentos actuales
- Edición y actualización de registros
- Visualización de historial
- Validación de campos obligatorios
- Comportamiento ante abandono de pantalla
- Persistencia y visibilidad de la información entre usuarios

---

## 3. Tipos de prueba

- Pruebas funcionales
- Pruebas exploratorias
- Pruebas de regresión
- Pruebas smoke

---

## 4. Estrategia de pruebas

Se utilizará un enfoque basado en riesgos, priorizando:

- Flujos críticos de registro clínico
- Integridad de la información
- Validaciones de negocio
- Experiencia de usuario en captura de datos

---

## 5. Escenarios principales

- Registro de antecedente clínico válido
- Edición de antecedentes existentes
- Restablecimiento de información
- Validación de campos obligatorios
- Cancelación de registro incompleto
- Visualización de historial
- Advertencia al abandonar pantalla sin guardar
- Visualización de registros entre distintos profesionales

---

## 6. Criterios de entrada

- Acceso al sistema disponible
- Usuario autenticado
- Datos mínimos configurados

---

## 7. Criterios de salida

- Ejecución completa de escenarios definidos
- Registro de defectos encontrados
- Validación de flujos críticos

---

## 8. Riesgos

- Pérdida de información clínica
- Registro incorrecto de medicamentos
- Falta de validaciones en campos obligatorios
- Inconsistencia entre usuarios

---

## 9. Entorno de pruebas

- Entorno QA
- Navegadores web (cross-browser testing)
