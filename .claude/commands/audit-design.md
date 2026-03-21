# Auditoría de Diseño

Ejecutá una auditoría de consistencia visual y calidad de diseño de la landing page.

## Entrada
$ARGUMENTS

## Proceso

### 1. Colores
- Leé `src/styles/theme.css` para los tokens definidos
- Buscá colores hardcodeados (hex, rgb, hsl) en Home.tsx, About.tsx, y componentes
- Verificá si se usan las variables CSS del tema consistentemente
- Evaluá dark mode support

### 2. Tipografía
- Leé `src/styles/fonts.css` — ¿qué fuentes se cargan?
- Buscá clases de text-size en componentes — ¿escala consistente?
- Verificá font-weights usados vs definidos en tema (400, 500)

### 3. Spacing
- Buscá valores custom de margin/padding (style={{ ... }}) que deberían ser Tailwind
- Verificá consistencia de gaps entre secciones similares
- Buscá px hardcodeados

### 4. Componentes
- Buscá `<button` que debería ser `<Button` de shadcn
- Verificá border-radius consistency (--radius: 0.625rem)
- Evaluá si se mezclan icon sets (Lucide vs MUI vs Phosphor)

### 5. Animaciones
- Verificá consistencia de `data-animate` usage
- ¿Timing y easing uniformes?
- ¿Hover/focus states consistentes?

### 6. Visual Patterns
- Evaluá jerarquía visual, whitespace, alignment
- ¿CTAs prominentes?
- ¿Patrones repetidos son consistentes?

## Output
Reportá: Design System compliance %, inconsistencias encontradas con severidad, y recomendaciones priorizadas
