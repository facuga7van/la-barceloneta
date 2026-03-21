# Auditoría Completa de La Barceloneta

Sos el orquestador de auditoría. Ejecutá una auditoría completa de todos los aspectos de la landing page.

## Entrada
$ARGUMENTS

Si no hay argumentos, ejecutar auditoría completa. Si hay argumentos, usarlos como filtro (ej: "solo performance y seo").

## Proceso

### Paso 1: Reconocimiento
Leé rápidamente estos archivos para entender el estado actual:
- `CLAUDE.md`
- `index.html`
- `package.json`
- `vite.config.ts`
- `src/app/routes.ts`

### Paso 2: Lanzar Auditorías en Paralelo

Usá el Agent tool para lanzar **6 agentes en paralelo**, cada uno especializado:

1. **Performance** — Bundle, assets, lazy loading, Core Web Vitals
   - Analizar: `package.json` deps, imports en componentes, `public/images/`, `public/videos/`, `vite.config.ts`
   - Buscar: imports pesados, imágenes sin lazy loading, código sin splitting

2. **Accesibilidad** — WCAG 2.1 AA, semántica, ARIA, contraste
   - Analizar: headings, landmarks, alt texts, labels, focus management, aria attributes
   - Buscar: `<img` sin alt, `onClick` en divs, contraste en theme.css

3. **SEO** — Meta tags, Open Graph, structured data, hash routing impact
   - Analizar: `index.html` meta tags, heading structure, contenido indexable
   - Buscar: og: tags, twitter: tags, JSON-LD, canonical URL

4. **Diseño** — Consistencia visual, tokens, tipografía, colores
   - Analizar: `theme.css`, uso de variables, colores hardcodeados, spacing
   - Buscar: hex colors fuera de variables, tamaños custom, icon sets mezclados

5. **Código** — TypeScript, patrones React, seguridad, complejidad
   - Analizar: `tsconfig.json`, tipos, hooks, component sizes, security patterns
   - Buscar: `any`, `dangerouslySetInnerHTML`, console.log, secrets, unused imports

6. **Responsive** — Breakpoints, mobile-first, touch targets, overflow
   - Analizar: clases responsive, media queries, navigation mobile, form inputs
   - Buscar: breakpoint distribution, overflow issues, touch targets < 44px

### Paso 3: Consolidar

Cuando todos los agentes terminen, consolidá los resultados en un reporte con este formato:

```
# 🔍 Auditoría Completa — La Barceloneta

**Fecha:** [hoy]
**Páginas auditadas:** Home, About

## Score General: X/100

| Área | Score | 🔴 Críticos | 🟡 Importantes | 🟢 Mejoras |
|------|-------|-------------|----------------|------------|
| Performance | X/100 | N | N | N |
| Accesibilidad | X/100 | N | N | N |
| SEO | X/100 | N | N | N |
| Diseño | X/100 | N | N | N |
| Código | X/100 | N | N | N |
| Responsive | X/100 | N | N | N |

## 🔴 Hallazgos Críticos
[Lista priorizada con archivo, línea y fix sugerido]

## 🟡 Hallazgos Importantes
[Lista priorizada]

## 🟢 Mejoras Sugeridas
[Lista priorizada]

## 📋 Plan de Acción (Top 10)
1. [Acción] — Impacto: [alto/medio] — Esfuerzo: [bajo/medio/alto]
2. ...
```

## Reglas
- NO modificar código — solo auditar y reportar
- Cada hallazgo debe tener: archivo, línea (si aplica), y sugerencia de fix
- Priorizar por impacto real en el usuario
- Ser honesto con los scores — no inflar ni deflatar
- Si un área tiene 0 hallazgos críticos pero mejoras posibles, puede tener score alto
