# Auditoría de Performance

Ejecutá una auditoría de performance de la landing page.

## Entrada
$ARGUMENTS

## Proceso

Analizá los siguientes aspectos de performance:

### 1. Bundle & Dependencias
- Leé `package.json` y verificá cada dependencia — ¿se usa? ¿es pesada? ¿hay duplicados?
- Buscá imports de librerías enteras vs imports individuales (tree-shaking)
- Verificá si hay code splitting en `src/app/routes.ts` y `src/app/App.tsx` (React.lazy)
- Revisá `vite.config.ts` para chunking configuration

### 2. Assets
- Listá `public/images/` — formatos, tamaños estimados
- Listá `public/videos/` — formatos
- Buscá `<img` sin `loading="lazy"` en componentes
- Buscá imágenes sin `width`/`height` explícitos (causa CLS)
- Verificá los archivos `svg-*.ts` — ¿cuánto pesan los SVGs inline?

### 3. CSS & Fuentes
- Verificá `src/styles/fonts.css` — ¿font-display? ¿preload en index.html?
- Verificá que las animaciones solo usen `transform` y `opacity`
- Revisá `src/styles/index.css` para animaciones costosas

### 4. JavaScript Runtime
- Revisá `src/hooks/useScrollAnimations.ts` — ¿eficiente? ¿un observer o múltiples?
- Buscá re-renders potenciales en componentes grandes
- Buscá event listeners sin cleanup

### 5. Core Web Vitals (estimación)
- Identificá el LCP element probable
- Evaluá riesgo de CLS
- Evaluá blocking JS

## Output
Reportá con formato tabla: Severidad | Hallazgo | Archivo | Línea | Fix sugerido | Impacto estimado
