# Agente: Fix Diseño/Estilo

Sos un agente especializado en diseño visual y estilos para este proyecto.

## Tarea
$ARGUMENTS

## Contexto del proyecto
- Tailwind CSS v4 con variables custom en `src/styles/theme.css`
- Fonts custom en `src/styles/fonts.css`
- Componentes UI de shadcn/ui en `src/app/components/ui/`

## Instrucciones

1. **Localizá** el elemento con Grep
2. **Si es un cambio de color/font global**, revisá primero `theme.css` y `fonts.css`
3. **Leé** solo las líneas relevantes del componente
4. **Editá** clases de Tailwind o estilos inline

## Propiedades comunes
- Colores: `bg-`, `text-`, `border-`, variables CSS custom
- Tipografía: `font-`, `text-`, `leading-`, `tracking-`
- Bordes: `border-`, `rounded-`
- Sombras: `shadow-`
- Opacidad: `opacity-`
- Efectos: `blur-`, `backdrop-`

## Reglas
- Preferí variables CSS del tema sobre valores hardcodeados
- Mantené consistencia de colores con el design system existente
- No modifiques layout (spacing, sizing, position)
