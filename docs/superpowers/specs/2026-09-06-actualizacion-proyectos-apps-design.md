# Actualización de proyectos: aplicaciones e interfaz web

## Objetivo

Sustituir proyectos anteriores por tres trabajos actuales y presentar sus interfaces dentro del portafolio sin depender de imágenes externas.

## Selección de inicio y proyectos

La página de inicio tendrá seis tarjetas distintas, en este orden editorial:

1. Revista Venus
2. Diseño de Portafolio
3. IUB
4. HerbEats
5. Click and Shoot
6. Chocolicious

Se retiran Silent Hill, Japanese Street y la repetición de Diseño de Portafolio. La página `/projects` mostrará las mismas seis fichas, una por proyecto.

## Imágenes y mockups

- Las capturas de IUB, HerbEats y Click and Shoot se copiarán desde `C:\Users\juand\OneDrive\Documentos\proyectos` al repositorio.
- Cada imagen de una ficha se mostrará a ancho completo, una debajo de la siguiente, manteniendo su relación de aspecto natural. No habrá recortes de galería, collage ni cambio de tamaño relativo.
- IUB y HerbEats se presentarán con un borde de dispositivo móvil sobrio que enmarque las capturas reales.
- Click and Shoot se presentará con un borde de navegador de escritorio sobrio que enmarque las capturas reales.
- Los mockups no usarán imágenes generadas ni contenido inventado: solo enmarcan las interfaces entregadas por Juan.

## Datos y rutas

- Se añadirán las entradas `iub`, `herbeats` y `click-and-shoot` al módulo central `src/data/projects.ts`.
- Cada trabajo tendrá una ruta estática propia en `/projects/<slug>` mediante la plantilla existente `src/pages/projects/[slug].astro`.
- Las tarjetas enlazarán internamente a esas rutas.

## Diseño y accesibilidad

- Se conserva la paleta actual, los bordes rectos y el lenguaje editorial asimétrico del portafolio.
- En móvil, todos los contenidos se apilan en una sola columna y los marcos no añaden desplazamiento horizontal.
- Las imágenes tendrán texto alternativo que describa la interfaz o pantalla correspondiente.

## Verificación

- Compilar con `pnpm run build`.
- Confirmar las seis rutas de proyecto generadas.
- Revisar una ficha de aplicación y una ficha web en escritorio y móvil.
