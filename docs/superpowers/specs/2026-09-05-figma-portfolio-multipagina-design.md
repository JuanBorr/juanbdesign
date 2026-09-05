# Portafolio cinético en tres páginas de Figma

Fecha: 2026-09-05

## Objetivo

Reorganizar la propuesta aprobada “Póster cinético” como una experiencia multipágina dentro del mismo archivo de Figma. La composición larga original será el Inicio real y conservará una selección visual de cinco proyectos. Proyectos y Contacto existirán además como páginas internas con contenido completo y una organización específica para cada propósito.

## Decisión aprobada

Se mantendrán tres páginas principales en el panel lateral de Figma:

1. `01 · Inicio`
2. `02 · Proyectos`
3. `03 · Contacto`

La composición actualmente nombrada `00 · Respaldo — composición completa` se convertirá en `01 · Inicio`. La versión corta de Inicio creada durante la primera reorganización se conservará como `99 · Archivo — inicio corto`, fuera del flujo principal, para mantener una copia recuperable.

## Principios de preservación

- Mantener el lenguaje visual del póster cinético: fondo claro, tipografía condensada, acento naranja, retícula editorial y esquinas rectas.
- Conservar las posiciones, escalas y textos modificados recientemente en el hero, la galería, el manifiesto y el cierre de contacto.
- Mantener todo el texto como capas de texto editables; no convertir letras en vectores.
- Reutilizar las imágenes ya cargadas en el archivo de Figma.
- Eliminar la tarjeta duplicada de “Diseño de Portafolio” tanto en Inicio como en Proyectos.
- Sustituir fuentes faltantes por Archivo Narrow y Archivo Black sin alterar el contenido.

## Página 01 · Inicio

La pantalla de Inicio incluirá:

- Navegación superior con accesos a Inicio, Proyectos y Contacto.
- Hero con el nombre “Juan Borrero”, retrato, descripción y CTA existentes.
- El nuevo párrafo editorial agregado por Juan.
- Los cinco proyectos: Revista de Venus, Silent Hill, Diseño de Portafolio, Japanese Street y Chocolicious.
- La cuadrícula irregular y dinámica funcionará como selección editorial, no como catálogo exhaustivo.
- Cinta cinética de disciplinas.
- Manifiesto o presentación breve.
- Bloque resumido de contacto con enlace a la página completa.
- Footer compacto con enlaces sociales.

El CTA principal y el enlace Proyectos del header llevarán conceptualmente a la página Proyectos. El enlace Contáctame y el cierre tipográfico llevarán a Contacto. `Sobre mí` permanecerá asociado al manifiesto incluido en Inicio.

## Página 02 · Proyectos

La pantalla de Proyectos incluirá:

- La misma navegación superior para mantener continuidad.
- Encabezado editorial “Proyectos”.
- Cuadrícula ordenada con los cinco proyectos únicos.
- Nombre, disciplina, año y acción de cada proyecto.
- Footer compacto.

La composición usará dos columnas claras, tarjetas alineadas y un ritmo vertical consistente. Mantendrá diferencias de escala moderadas para conservar personalidad, pero evitará los desplazamientos extremos de Inicio. Esta página quedará preparada para añadir proyectos nuevos sin rehacer toda la retícula.

## Página 03 · Contacto

La pantalla de Contacto incluirá:

- Navegación superior compartida.
- Mensaje de contacto de gran escala.
- Correo electrónico como acción principal.
- Enlaces a Behance, Instagram y GitHub.
- Un bloque breve sobre disponibilidad y tipo de colaboraciones.
- Footer compacto.

La página mantendrá bastante espacio negativo para diferenciarla de la densidad visual de Proyectos.

## Navegación y prototipo

Los tres frames principales se nombrarán con claridad según su página y compartirán el mismo header. Proyectos y Contáctame se marcarán como enlaces hacia sus páginas internas. Como Figma separa los prototipos por página, se usarán interacciones compatibles cuando sea posible; en caso contrario, los nodos tendrán nombres y destinos explícitos para representar sin ambigüedad las rutas reales `/projects` y `/contact` del sitio.

## Verificación

Antes de entregar se comprobará:

1. Que existan tres páginas principales y una página archivada de respaldo.
2. Que la composición completa original sea la página Inicio.
3. Que Inicio y Proyectos muestren exactamente cinco tarjetas únicas cada uno.
4. Que Proyectos use una retícula más ordenada que Inicio.
5. Que Contacto conserve correo, redes, disponibilidad y CTA sin solapamientos.
6. Que todo el texto siga siendo editable y no existan letras convertidas en vectores.
7. Que no haya fuentes faltantes, contenido cortado o solapamientos accidentales.
8. Que Inicio, Proyectos y Contacto compartan navegación, estilos y footer.
