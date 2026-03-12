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

## Convenciones
- Idioma del sitio: español argentino
- Responsive: mobile-first con breakpoints Tailwind (sm, md, lg, xl)
- Imports de imágenes: `figma:asset/[nombre]`
- Path aliases: `@/` → `src/`, `figma:asset/` → `public/images/`
- Animaciones: atributo `data-animate` con IntersectionObserver
