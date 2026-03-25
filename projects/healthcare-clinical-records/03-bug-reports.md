# Bug Reports – Gestión de Antecedentes Clínicos

## BUG-001 – No permite agregar múltiples medicamentos en un mismo registro

**Módulo:** Gestión de medicación actual  
**Severidad:** Alta  
**Prioridad:** Alta  
**Entorno:** QA

### Descripción
El sistema no permite agregar múltiples medicamentos en un mismo registro de medicación actual, aunque el comportamiento esperado es que el usuario pueda seleccionar y guardar más de un medicamento dentro del mismo formulario.

### Pasos para reproducir
1. Iniciar sesión en el sistema con un usuario autorizado.
2. Acceder al expediente de un paciente.
3. Ir a la sección de medicación actual.
4. Seleccionar la opción para agregar medicamentos.
5. Intentar registrar más de un medicamento en el mismo registro.
6. Guardar la información.

### Resultado actual
El sistema solo permite registrar un medicamento o impide completar el registro múltiple esperado.

### Resultado esperado
El sistema debe permitir agregar y guardar múltiples medicamentos dentro del mismo registro, de acuerdo con la lógica funcional definida.

### Impacto
- Registro incompleto de la medicación actual del paciente.
- Riesgo de inconsistencia en la información clínica.
- Posible afectación del proceso asistencial por información parcial.

---

## BUG-002 – Permite guardar antecedente clínico con campos obligatorios vacíos

**Módulo:** Gestión de antecedentes clínicos  
**Severidad:** Media  
**Prioridad:** Alta  
**Entorno:** QA

### Descripción
El sistema permite guardar un antecedente clínico aunque existan campos obligatorios sin completar.

### Pasos para reproducir
1. Iniciar sesión en el sistema.
2. Acceder al módulo de antecedentes clínicos.
3. Seleccionar la opción para crear un nuevo registro.
4. Dejar uno o más campos obligatorios vacíos.
5. Intentar guardar el registro.

### Resultado actual
El sistema guarda el registro sin mostrar validaciones obligatorias.

### Resultado esperado
El sistema debe impedir el guardado y mostrar mensajes de validación en los campos requeridos.

### Impacto
- Registro de información clínica incompleta.
- Disminución de la calidad del dato.
- Riesgo de errores en la consulta posterior de antecedentes.
