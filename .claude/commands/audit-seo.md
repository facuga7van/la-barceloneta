# Auditoría de SEO

Ejecutá una auditoría de SEO de la landing page. Tené en cuenta que usa hash routing (/#/).

## Entrada
$ARGUMENTS

## Proceso

### 1. Meta Tags
- Leé `index.html` completo — verificá: title, description, viewport, charset, robots, canonical, favicon

### 2. Open Graph & Twitter Cards
- Verificá: og:title, og:description, og:image, og:url, og:type, og:locale
- Verificá: twitter:card, twitter:title, twitter:description, twitter:image

### 3. Structured Data
- Buscá `application/ld+json` en index.html
- Si no existe, recomendá schemas relevantes (RealEstateAgent, Organization, WebSite)

### 4. Contenido
- Verificá heading hierarchy en Home.tsx y About.tsx
- Buscá keywords relevantes: "inversión", "inmobiliaria", "fraccionada", etc.
- Verificá alt text de imágenes — ¿incluyen keywords?
- Verificá internal linking

### 5. Technical SEO
- ¿Existe `robots.txt` en `public/`?
- ¿Existe `sitemap.xml`?
- ¿El deploy usa HTTPS? (GitHub Pages)
- ¿Hay `<link rel="canonical">`?

### 6. Hash Routing Impact
- Evaluar qué contenido es invisible para crawlers
- ¿El HTML estático tiene contenido o está vacío hasta hydration?
- ¿Existe `<noscript>`?
- Recomendar alternativas si el impacto es significativo

## Output
Reportá con tabla de meta tags (tag, estado, valor actual, recomendación) + hallazgos priorizados
