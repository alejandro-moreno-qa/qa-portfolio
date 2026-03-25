# Bug Reports

---

## 🐞 BUG-001 – No permite agregar múltiples medicamentos

**Módulo:** Gestión de Medicación Actual  
**Severidad:** Alta  
**Prioridad:** Alta  

### Descripción
El sistema no permite agregar múltiples medicamentos en un mismo registro, limitando la selección a un solo elemento.

---

### Pasos para reproducir

1. Acceder al módulo de antecedentes clínicos  
2. Ir a la sección de medicamentos actuales  
3. Intentar agregar más de un medicamento en un mismo registro  

---

### Resultado actual
El sistema solo permite seleccionar un medicamento.

---

### Resultado esperado
El sistema debe permitir registrar múltiples medicamentos en un mismo registro.

---

### Impacto
- Registro incompleto de información clínica  
- Posible afectación en la atención del paciente  

---

---

## 🐞 BUG-002 – No valida campo obligatorio en antecedente clínico

**Módulo:** Antecedentes Clínicos  
**Severidad:** Media  
**Prioridad:** Alta  

### Descripción
El sistema permite guardar un antecedente clínico sin completar todos los campos obligatorios.

---

### Pasos para reproducir

1. Acceder al módulo de antecedentes  
2. Iniciar registro de nuevo antecedente  
3. Dejar un campo obligatorio vacío  
4. Guardar  

---

### Resultado actual
El sistema guarda el registro sin validación.

---

### Resultado esperado
El sistema debe mostrar un mensaje de error y evitar el guardado.

---

### Impacto
- Datos incompletos en historial clínico  
- Riesgo en la calidad de la información médica  
