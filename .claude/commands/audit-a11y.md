# Auditoría de Accesibilidad

Ejecutá una auditoría de accesibilidad WCAG 2.1 AA de la landing page.

## Entrada
$ARGUMENTS

## Proceso

### 1. Estructura Semántica
- Buscá todos los headings (`<h1` a `<h6`) en Home.tsx y About.tsx — ¿jerarquía correcta?
- Verificá landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`
- Verificá `lang="es"` en `index.html`

### 2. Imágenes & Media
- Buscá `<img` sin `alt` o con `alt=""` que no sea decorativa
- Verificá `ImageWithFallback.tsx` — ¿maneja alt?
- Verificá SVGs — ¿tienen aria-label?
- Verificá videos — ¿subtítulos?

### 3. Contraste
- Leé `src/styles/theme.css` y evaluá combinaciones de colores
- Verificá texto sobre imágenes (hero section)
- Verificá focus indicators

### 4. Formularios
- Buscá `<input`, `<select>`, `<textarea>` — ¿tienen labels asociados?
- Verificá `aria-required`, `aria-invalid`, `aria-describedby`
- Verificá `autocomplete` en campos de contacto

### 5. Navegación
- ¿Existe skip link?
- Buscá `tabIndex` con valores positivos
- Buscá `onClick` en elementos no-interactivos (`<div>`, `<span>`) sin role/tabIndex
- Verificá que links tengan texto descriptivo

### 6. ARIA
- Buscá uso de roles, aria-expanded, aria-hidden, aria-live
- Verificá que no haya roles redundantes

### 7. Animaciones
- Verificá `prefers-reduced-motion` en CSS y JS
- ¿Hay autoplay sin control de pausa?

## Output
Reportá con formato: Severidad | WCAG Criterio | Hallazgo | Archivo | Línea | Fix sugerido
