# Casos de Prueba – Gestión de Antecedentes Clínicos

## TC-001 – Registro de antecedente clínico válido

**Precondición:** Usuario autenticado.

**Pasos:**
1. Acceder al módulo de antecedentes clínicos.
2. Seleccionar la opción **Nuevo registro**.
3. Completar todos los campos obligatorios.
4. Guardar el registro.

**Resultado esperado:**  
El sistema guarda correctamente el antecedente y lo muestra en el listado o historial correspondiente.

---

## TC-002 – Validación de campos obligatorios

**Precondición:** Usuario autenticado.

**Pasos:**
1. Acceder al formulario de registro de antecedente clínico.
2. Dejar uno o más campos obligatorios vacíos.
3. Intentar guardar.

**Resultado esperado:**  
El sistema muestra mensajes de validación en los campos requeridos y no permite guardar el registro.

---

## TC-003 – Edición de antecedente clínico existente

**Precondición:** Existe al menos un antecedente clínico previamente registrado.

**Pasos:**
1. Acceder al listado o historial de antecedentes.
2. Seleccionar un registro existente.
3. Modificar uno o más campos editables.
4. Guardar los cambios.

**Resultado esperado:**  
El sistema actualiza correctamente la información y refleja los cambios guardados.

---

## TC-004 – Restablecimiento de cambios en formulario

**Precondición:** Usuario autenticado con acceso al formulario de antecedentes.

**Pasos:**
1. Abrir un registro nuevo o existente.
2. Modificar información del formulario.
3. Seleccionar la opción **Restablecer**.

**Resultado esperado:**  
El sistema revierte los cambios no guardados y restablece la información al estado anterior o inicial.

---

## TC-005 – Cancelación de registro incompleto

**Precondición:** Usuario autenticado.

**Pasos:**
1. Iniciar un nuevo registro de antecedente.
2. Completar parcialmente la información.
3. Seleccionar la opción **Cancelar**.

**Resultado esperado:**  
El sistema descarta la información no guardada y retorna al estado anterior sin crear el registro.

---

## TC-006 – Advertencia al abandonar pantalla con cambios sin guardar

**Precondición:** Usuario autenticado con cambios pendientes en el formulario.

**Pasos:**
1. Ingresar información en el formulario.
2. Intentar salir de la pantalla o navegar a otra sección sin guardar.

**Resultado esperado:**  
El sistema muestra una advertencia indicando que existen cambios sin guardar y solicita confirmación antes de salir.

---

## TC-007 – Visualización de historial clínico

**Precondición:** El paciente tiene antecedentes registrados.

**Pasos:**
1. Acceder a la sección de historial o antecedentes.
2. Consultar los registros del paciente.

**Resultado esperado:**  
El sistema muestra correctamente los antecedentes registrados del paciente con la información correspondiente.

---

## TC-008 – Visualización de registro entre distintos profesionales

**Precondición:** Un usuario del sistema registró previamente un antecedente clínico para el paciente.

**Pasos:**
1. Iniciar sesión con otro usuario autorizado.
2. Acceder al expediente del mismo paciente.
3. Consultar la sección de antecedentes.

**Resultado esperado:**  
El sistema muestra el antecedente previamente registrado, respetando la persistencia y visibilidad esperada para usuarios autorizados.

---

## TC-009 – Registro de múltiples medicamentos en medicación actual

**Precondición:** Usuario autenticado con acceso a la sección de medicación actual.

**Pasos:**
1. Acceder a la sección de medicación actual.
2. Intentar agregar más de un medicamento en el mismo registro.
3. Guardar la información.

**Resultado esperado:**  
El sistema permite seleccionar y guardar múltiples medicamentos en un mismo registro, según la lógica funcional esperada.

---

## TC-010 – Consulta de registro guardado en historial posterior

**Precondición:** Se guardó correctamente un antecedente clínico.

**Pasos:**
1. Registrar un nuevo antecedente clínico.
2. Guardar el registro.
3. Acceder nuevamente al historial del paciente.

**Resultado esperado:**  
El sistema muestra el nuevo antecedente en el historial con los datos guardados correctamente.
