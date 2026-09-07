# Portadas y ritmo de las fichas de proyecto

## Objetivo

Crear portadas propias para IUB, HerbEats y Click and Shoot, y ajustar la presentación interna de todos los proyectos para una lectura vertical inspirada en la jerarquía de Behance.

## Referencia de presentación

La ficha de Venus Magazine en Behance establece el principio de composición: una imagen de cubierta dominante antes del resto del material y una galería que se lee de arriba a abajo.

En el portafolio se aplicará este principio sin copiar la interfaz de Behance:

- El título, categoría y una sola portada completa aparecerán primero.
- La descripción y metadatos quedarán después de la portada.
- Todas las imágenes de proyecto se mostrarán en una única columna, completas y separadas con espacio uniforme.
- No habrá recortes, mosaicos ni tamaños alternados en las galerías.

## Portadas nuevas

Las tres cubiertas se generarán como mockups fotográficos sin texto añadido, marcas inventadas ni interfaz inventada. Cada una utilizará una pantalla real del proyecto como referencia visual.

- IUB: teléfono moderno sobre una mesa de estudio, con ambiente académico sobrio y la pantalla de IUB como protagonista.
- HerbEats: teléfono moderno junto a ingredientes frescos y luz editorial, con la pantalla de HerbEats como protagonista.
- Click and Shoot: portátil mostrando el sitio web en un estudio de fotografía oscuro, con textura de luz y equipo desenfocado al fondo.

## Formato de archivos

- Las nuevas portadas se guardarán junto a cada proyecto como archivos WebP sin pérdidas para conservar la salida original.
- Las capturas PNG existentes se mantienen como fuentes maestras para evitar una degradación innecesaria.
- Astro seguirá generando variantes WebP optimizadas para navegador durante la compilación.

## Integración

- Se reemplazará la imagen de tarjeta y portada de ficha de IUB, HerbEats y Click and Shoot por su portada generada.
- Las capturas reales seguirán apareciendo dentro de la galería debajo de la información del proyecto.
- No se cambiarán rutas, nombres de proyectos ni navegación.

## Índice de proyectos

- La página `/projects` se convertirá en una cuadrícula editorial ordenada de tres columnas y dos filas en escritorio.
- Cada tarjeta tendrá el mismo formato de imagen, título, número y categoría debajo. No se copiarán los controles, estadísticas ni elementos de interfaz de Behance.
- El orden será: Revista Venus, Diseño de Portafolio, IUB, HerbEats, Click and Shoot y Chocolicious.
- En tabletas la cuadrícula pasará a dos columnas y en móvil a una sola columna.

## Verificación

- Inspeccionar las tres portadas generadas antes de integrarlas.
- Ejecutar `pnpm run build`.
- Revisar una ficha de aplicación, una de web y una de editorial en escritorio y móvil.
