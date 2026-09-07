# Fichas internas de proyectos

## Objetivo

Hacer que los trabajos del portafolio se consulten dentro del sitio, sin redirecciones directas a Behance. Cada enlace de proyecto llevará a una ficha editorial propia con las imágenes originales del trabajo alojadas en el repositorio.

## Alcance

- Crear cinco fichas únicas: Revista de Venus, Silent Hill, Diseño de Portafolio, Japanese Street y Chocolicious.
- Mantener seis enlaces en Inicio: las dos tarjetas de Diseño de Portafolio abren la misma ficha porque representan el mismo trabajo.
- Descargar y optimizar las imágenes públicas disponibles en las páginas de Behance autorizadas por el usuario.
- Guardar los recursos de cada trabajo bajo `src/assets/projects/<slug>/` para que Astro los procese y publique desde el sitio.
- Sustituir los enlaces externos de las tarjetas en Inicio y Proyectos por rutas internas estables bajo `/projects/<slug>`.
- Diseñar cada ficha con una portada, contexto breve, datos de rol y disciplinas, galería editorial y navegación entre fichas.
- Conservar el enlace a Behance al final como referencia secundaria, no como ruta principal.
- Mantener el fondo claro, tinta, naranja, líneas rectas, tipografía condensada, revelados existentes y diseño responsive.

## Arquitectura

- Un módulo de datos central definirá título, resumen, disciplinas, imagen de portada, galería, enlace de Behance y relación de navegación para los cinco proyectos.
- Una ruta dinámica `src/pages/projects/[slug].astro` renderizará las fichas a partir de esos datos.
- `Card.astro` aceptará rutas internas sin cambiar su accesibilidad ni su interacción visual.
- Las páginas Inicio y Proyectos reutilizarán el módulo de datos para no duplicar títulos, categorías ni enlaces.

## Diseño de ficha

- Encabezado editorial con número, título y categoría.
- Imagen de portada a ancho amplio como primera pieza de lectura.
- Dos columnas: una declaración de proyecto y un bloque corto de rol y disciplinas.
- Galería con imágenes reales en una retícula asimétrica. En móvil se convierte en una sola columna.
- Enlaces de anterior y siguiente proyecto al cierre, más un enlace discreto para ver el original en Behance.

## Reglas de contenido

- No se inventarán clientes, fechas, resultados ni métricas.
- Cuando Behance no aporte texto descriptivo, la ficha usará únicamente el título, la categoría y una descripción funcional basada en el alcance ya visible en el portafolio.
- Se usarán todos los recursos que estén disponibles públicamente en cada publicación; las galerías no incluirán imágenes de terceros no relacionadas con el proyecto.

## Verificación

- Confirmar que las seis tarjetas del inicio y las cinco tarjetas de Proyectos navegan a rutas internas.
- Comprobar que todas las imágenes se sirven desde el sitio construido, sin depender de Behance.
- Verificar cada ruta generada, los enlaces anterior/siguiente, el enlace secundario de Behance, la vista móvil y el build de Astro.
