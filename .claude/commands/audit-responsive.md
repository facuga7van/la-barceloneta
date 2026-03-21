# Auditoría Responsive

Ejecutá una auditoría de adaptabilidad responsive de la landing page.

## Entrada
$ARGUMENTS

## Proceso

### 1. Mobile-First
- Verificá si los estilos base son mobile (hidden sm:block = correcto, block sm:hidden = incorrecto)
- Buscá patrones responsive: `flex-col` base con `sm:flex-row`, etc.
- Verificá que font sizes base sean legibles en 320px

### 2. Breakpoints
- Contá ocurrencias de `sm:`, `md:`, `lg:`, `xl:`, `2xl:` en componentes
- Buscá `@media` queries custom fuera de Tailwind
- Verificá que no haya saltos abruptos (1col → 4col sin intermedio)

### 3. Layout
- Buscá `grid-cols-` — ¿variantes responsive?
- Verificá que grids colapsen en mobile
- Verificá max-width de contenedores
- Evaluá navegación mobile (hamburger menu)

### 4. Overflow
- Buscá `overflow-x-hidden` (síntoma de problemas)
- Buscá width fijos que podrían exceder viewport
- Verificá imágenes con max-width
- Evaluá carousels/sliders

### 5. Touch Targets
- Evaluá tamaño de botones en mobile (mínimo 44x44px)
- Verificá spacing entre links
- Verificá inputs de formulario
- Evaluá iconos de redes sociales

### 6. Typography
- ¿Títulos grandes se reducen en mobile?
- ¿Line-length controlado (~65-75 chars)?
- ¿Body text ≥16px en mobile?

### 7. Navigation
- ¿Existe menú mobile?
- ¿A qué breakpoint cambia?
- ¿El nav fijo no tapa contenido?

## Output
Reportá: Mobile-first score, breakpoint distribution, + tabla de issues por viewport (320px, 768px, 1024px, 1440px+)
