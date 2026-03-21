# Auditoría de Código

Ejecutá una auditoría de calidad de código de la landing page.

## Entrada
$ARGUMENTS

## Proceso

### 1. TypeScript
- Verificá `tsconfig.json` — ¿strict mode? Configuración
- Buscá `any` en el código (as any, : any, parámetros sin tipo)
- Buscá unused imports
- Evaluá type safety general

### 2. React Patterns
- Identificá componentes > 500 líneas
- Buscá `.map(` sin `key=` o con `key={index}`
- Buscá `useEffect` — ¿deps correctas? ¿cleanup?
- Buscá event handlers inline que deberían ser memoizados
- ¿Existe error boundary?

### 3. Seguridad
- Buscá `dangerouslySetInnerHTML`
- Buscá API keys, tokens, secrets hardcodeados
- Buscá `target="_blank"` sin `rel="noopener noreferrer"`
- Verificá validación del formulario de contacto

### 4. Complejidad
- Listá archivos > 500 líneas
- Buscá funciones > 50 líneas
- Buscá `console.log` que quedaron de debug
- Buscá código comentado (dead code)

### 5. Dependencias
- Verificá paquetes no usados en package.json
- Identificá duplicados funcionales
- Verificá dev vs prod dependencies

### 6. Build Config
- Verificá ESLint config
- ¿Source maps en producción?
- ¿.env en .gitignore?

## Output
Reportá: TypeScript score, React patterns score, Security issues, + tabla de hallazgos priorizados
