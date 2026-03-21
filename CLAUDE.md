# La Barceloneta - Proyecto Web

## Descripción
Landing page de inversión inmobiliaria fraccionada en React + TypeScript + Tailwind CSS v4, desplegada en GitHub Pages.

## Stack
- React 18 + React Router 7 (hash routing)
- TypeScript + Vite
- Tailwind CSS v4 (con @tailwindcss/vite)
- shadcn/ui + Radix UI
- Motion (animaciones)

## Estructura clave
- `src/imports/Home.tsx` — Página principal (~7000 líneas). SIEMPRE usar Grep antes de leer.
- `src/imports/About.tsx` — Página Nosotros (~1700 líneas). SIEMPRE usar Grep antes de leer.
- `src/app/routes.ts` — Rutas (hash router)
- `src/styles/theme.css` — Variables de tema
- `src/styles/fonts.css` — Fuentes custom
- `src/hooks/useScrollAnimations.ts` — Animaciones de scroll
- `public/images/` — Assets de Figma

## Sistema de Feedback (Slash Commands)

Este proyecto tiene un sistema optimizado para procesar feedback del cliente:

### Comando principal
- `/feedback [texto del feedback]` — Orquestador que parsea, categoriza, prioriza y ejecuta todo el feedback

### Agentes especializados (para uso individual)
- `/fix-layout [tarea]` — Layout, responsive, márgenes, alineación
- `/fix-design [tarea]` — Colores, fuentes, estilos visuales
- `/fix-content [tarea]` — Textos, contenido, links
- `/fix-nav [tarea]` — Navegación, rutas, menú, scroll
- `/fix-assets [tarea]` — Imágenes, SVGs, videos

### Optimización de tokens
1. **NUNCA leer archivos completos** de Home.tsx o About.tsx — usar Grep para localizar primero
2. **Agrupar cambios** del mismo archivo para una sola lectura
3. **Agentes en paralelo** solo para 3+ tareas independientes en archivos distintos
4. **Cambios de texto**: Edit directo sin leer contexto extra cuando la ubicación es clara
5. **Read con offset/limit**: máximo 50 líneas de contexto por operación

## Sistema de Auditoría (Slash Commands)

Auditoría completa de todos los aspectos de la landing page. Solo analiza y reporta — NO modifica código.

### Comando principal
- `/audit` — Ejecuta auditoría completa (6 áreas en paralelo) y genera reporte consolidado con scores

### Auditorías individuales
- `/audit-perf` — Performance: bundle, assets, lazy loading, Core Web Vitals
- `/audit-a11y` — Accesibilidad: WCAG 2.1 AA, semántica, ARIA, contraste
- `/audit-seo` — SEO: meta tags, Open Graph, structured data, hash routing impact
- `/audit-design` — Diseño: consistencia visual, tokens, tipografía, colores
- `/audit-code` — Código: TypeScript, patrones React, seguridad, complejidad
- `/audit-responsive` — Responsive: breakpoints, mobile-first, touch targets, overflow

### Agents (en `.claude/agents/custom/`)
- `audit-orchestrator` — Coordinador que delega y consolida resultados
- `audit-performance` — Analista de rendimiento
- `audit-accessibility` — Analista WCAG
- `audit-seo` — Analista SEO
- `audit-design` — Analista de diseño visual
- `audit-code` — Analista de calidad de código
- `audit-responsive` — Analista responsive

### Scoring
Cada área se evalúa 0-100. Score general es promedio ponderado:
Performance 20%, Accesibilidad 25%, SEO 15%, Diseño 15%, Código 10%, Responsive 15%

## Convenciones
- Idioma del sitio: español argentino
- Responsive: mobile-first con breakpoints Tailwind (sm, md, lg, xl)
- Imports de imágenes: `figma:asset/[nombre]`
- Path aliases: `@/` → `src/`, `figma:asset/` → `public/images/`
- Animaciones: atributo `data-animate` con IntersectionObserver
