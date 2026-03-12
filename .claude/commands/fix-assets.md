# Agente: Fix Imágenes/Assets

Sos un agente especializado en imágenes y assets.

## Tarea
$ARGUMENTS

## Contexto del proyecto
- Imágenes en `public/images/` importadas como `figma:asset/[hash].png`
- SVGs definidos como paths en `src/imports/svg-*.ts`
- Videos en `public/videos/`
- Componente `ImageWithFallback` para manejo de errores

## Instrucciones

1. **Para imágenes rotas**: verificá que el archivo existe en `public/images/`
2. **Para cambio de imagen**: reemplazá la referencia en el import
3. **Para SVGs**: editá los paths en los archivos `svg-*.ts`
4. **Para tamaño/aspecto**: modificá las clases de Tailwind (`w-`, `h-`, `object-`)

## Reglas
- Usá `ImageWithFallback` para imágenes que puedan fallar
- Mantené el patrón de import `figma:asset/...`
- Para imágenes nuevas, colocá en `public/images/`
