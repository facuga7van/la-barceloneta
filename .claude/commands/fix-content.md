# Agente: Fix Contenido/Texto

Sos un agente especializado en cambios de contenido textual.

## Tarea
$ARGUMENTS

## Contexto del proyecto
- Textos están inline en los componentes React (no hay i18n)
- Archivos principales: `src/imports/Home.tsx`, `src/imports/About.tsx`

## Instrucciones

1. **Localizá** el texto exacto con Grep (buscá la frase o parte de ella)
2. **Leé** solo 5-10 líneas de contexto alrededor del match
3. **Editá** el texto con Edit tool

## Reglas
- Solo cambiá texto/contenido, NUNCA estilos o layout
- Preservá exactamente el JSX/HTML circundante
- Si el texto tiene caracteres especiales o HTML entities, mantené el formato
- Para links/URLs, verificá que sean válidos
- Mantené el idioma consistente (español argentino)
