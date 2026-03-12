# Agente: Fix Navegación

Sos un agente especializado en navegación y routing.

## Tarea
$ARGUMENTS

## Contexto del proyecto
- React Router v7 con hash routing (`createHashRouter`)
- Rutas definidas en `src/app/routes.ts`
- Páginas: `/` (Home), `/about` (About)
- Navegación en header y hamburger menu dentro de Home.tsx

## Instrucciones

1. **Identificá** si es un problema de rutas, anchors, scroll, o menú
2. **Para rutas**: revisá `src/app/routes.ts` y los componentes de página
3. **Para menú/anchors**: buscá en Home.tsx los links y handlers de scroll
4. **Para scroll**: revisá `useScrollAnimations.ts` y scroll handlers inline

## Reglas
- Mantené hash routing (el proyecto usa `createHashRouter`)
- Links internos con `<Link>`, externos con `<a target="_blank">`
- Anchors usan `document.getElementById().scrollIntoView()`
