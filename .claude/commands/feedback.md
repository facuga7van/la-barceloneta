# Orquestador de Feedback del Cliente

Sos el orquestador principal del sistema de feedback. Tu trabajo es procesar feedback del cliente de forma eficiente optimizando tokens/tarea completada.

## Entrada

El usuario te va a pasar feedback del cliente en formato libre (texto, lista de cambios, capturas, etc.). El feedback viene en el argumento: $ARGUMENTS

## Proceso

### Paso 1: Parsear y Categorizar

Analizá el feedback y clasificá cada item en una de estas categorías:

| Categoría | Código | Ejemplos |
|-----------|--------|----------|
| Layout/Responsive | `LAYOUT` | Márgenes, paddings, alineación, responsive, overlaps |
| Diseño/Estilo | `DESIGN` | Colores, fuentes, bordes, sombras, opacidad |
| Contenido/Texto | `CONTENT` | Textos, traducciones, datos, números, links |
| Navegación | `NAV` | Rutas, menú, scroll, anchors, redirecciones |
| Imágenes/Assets | `ASSETS` | Fotos, íconos, SVGs, videos, resolución |
| Animaciones | `ANIM` | Transiciones, scroll animations, hover effects |
| Bugs/Funcional | `BUG` | Errores, comportamiento inesperado, consola |

### Paso 2: Priorizar

Ordená los items por impacto:
1. **Crítico** — Rompe funcionalidad o UX (bugs, navegación rota)
2. **Alto** — Muy visible para el usuario (layout, contenido principal)
3. **Medio** — Afecta calidad visual (diseño, animaciones)
4. **Bajo** — Detalles menores (ajustes finos, nice-to-haves)

### Paso 3: Crear Plan de Tareas

Usá TodoWrite para crear la lista de tareas organizada por prioridad. Cada tarea debe incluir:
- Categoría (código)
- Descripción concreta del cambio
- Archivo(s) probable(s) a modificar
- Prioridad

### Paso 4: Ejecutar

Para cada tarea, ejecutá directamente el cambio:

**Reglas de eficiencia (optimización de tokens):**
- NO leas archivos completos si ya sabés dónde está el cambio. Usá Grep para localizar la línea exacta y luego Read con offset/limit.
- Para Home.tsx (~7000 líneas) y About.tsx (~1700 líneas), SIEMPRE localizá primero con Grep antes de leer.
- Agrupá cambios del mismo archivo para hacer una sola lectura.
- Usá agentes en paralelo SOLO cuando hay tareas independientes en archivos distintos.
- Para cambios simples de texto/contenido, hacelos directamente con Edit sin leer contexto extra.

**Reglas de calidad:**
- Cada cambio debe ser verificable visualmente.
- No tocar código que no esté en el feedback.
- Mantené consistencia con el estilo existente (Tailwind, convenciones del proyecto).
- Si un cambio es ambiguo, preguntá antes de implementar.

### Paso 5: Reporte

Al terminar, dá un resumen conciso:
```
Feedback procesado: X/Y items completados
- [DONE] Descripción del cambio
- [DONE] Descripción del cambio
- [SKIP] Razón por la que se saltó
- [ASK] Pregunta sobre item ambiguo
```

## Estrategia de Agentes

Lanzá agentes en paralelo cuando:
- Hay 3+ tareas independientes en archivos distintos
- Las tareas no tienen dependencias entre sí

NO lances agentes cuando:
- Son 1-2 cambios simples (hacelos directo, es más eficiente en tokens)
- Los cambios están en el mismo archivo
- Un cambio depende del resultado de otro
