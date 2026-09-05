# Dos propuestas de rediseño para el portafolio de Juan Borrero

Fecha: 2026-09-04

## Objetivo

Crear dos prototipos HTML independientes para comparar mejoras de dirección de arte, jerarquía, narrativa y movimiento en el portafolio actual. Los prototipos deben reutilizar los proyectos, imágenes, enlaces y voz personal existentes sin cambiar las rutas o componentes de la aplicación Astro.

## Audiencia y criterio de éxito

La audiencia principal son reclutadores, estudios creativos y posibles clientes que necesitan entender en pocos segundos quién es Juan, qué tipo de trabajo realiza y qué proyectos deberían abrir primero.

El resultado será exitoso si:

- Las dos propuestas se sienten claramente diferentes entre sí.
- El retrato y los cinco proyectos actuales se convierten en protagonistas visuales.
- Las acciones "Ver proyecto" y "Contactar" son evidentes y consistentes.
- Los prototipos funcionan al abrirse directamente en un navegador, sin instalación ni servidor.
- El diseño se adapta correctamente a escritorio, tableta y móvil.
- La interacción añade jerarquía y feedback sin dificultar la lectura.

## Alcance y archivos

Se crearán estos archivos:

- `propuestas/editorial-oscuro.html`
- `propuestas/poster-cinetico.html`

Cada archivo contendrá su propio HTML, CSS y JavaScript. Los prototipos usarán rutas relativas hacia las imágenes existentes en `src/assets/projects` y `public`. No se modificará la implementación Astro durante esta etapa.

## Contenido compartido

Ambas propuestas conservarán:

- Nombre: Juan Borrero.
- Posicionamiento: diseñador web y creador de experiencias digitales accesibles.
- Retrato actual.
- Revista de Venus.
- Poster de Silent Hill.
- Diseño de Portafolio.
- Japanese Street Poster.
- Chocolicious Landing Page.
- Enlaces actuales de Behance, Instagram y GitHub.
- Navegación conceptual hacia trabajo, perfil y contacto.

La redacción visible se corregirá para eliminar errores gramaticales, reducir frases genéricas y facilitar el escaneo. El significado original no cambiará.

## Propuesta A: Editorial oscuro

### Lectura de diseño

Portafolio de diseñador gráfico y web para clientes y reclutadores, con una identidad oscura, profesional y editorial. Conserva el naranja como único acento.

- `DESIGN_VARIANCE: 7`
- `MOTION_INTENSITY: 5`
- `VISUAL_DENSITY: 4`

### Sistema visual

- Fondo carbón, superficies ligeramente más claras y texto marfil.
- Naranja moderado como único acento en enlaces, foco y estados activos.
- Tipografía sans condensada para titulares y sans neutra para cuerpo.
- Radios de 14 px en imágenes y botones tipo píldora. Esta es la única excepción documentada de forma: controles redondos, contenido suavemente rectangular.
- Sombras teñidas de naranja y carbón, nunca negras puras.

### Composición

1. Navegación compacta en una sola línea.
2. Hero asimétrico: presentación a la izquierda y retrato a la derecha.
3. Proyecto principal a ancho completo usando Revista de Venus.
4. Galería editorial alternada con los cuatro proyectos restantes.
5. Bloque breve de perfil con capacidades concretas.
6. Cierre con una sola llamada a contacto y enlaces sociales.

### Movimiento

- Entrada escalonada del hero para comunicar jerarquía.
- Revelado mediante `IntersectionObserver` al entrar cada proyecto.
- Escala y desplazamiento leves de imagen en hover para indicar que es interactiva.
- Sin scroll hijacking, cursores personalizados o animaciones infinitas.
- `prefers-reduced-motion` desactiva entradas y transformaciones.

### Adaptación móvil

- Hero y proyectos pasan a una sola columna bajo 768 px.
- La navegación secundaria se reduce a dos accesos claros.
- Titulares usan `clamp()` para evitar más de dos líneas en el hero.
- Imágenes conservan relaciones de aspecto y espacio reservado para evitar saltos.

## Propuesta B: Póster cinético

### Lectura de diseño

Portafolio de diseñador gráfico con una identidad experimental inspirada en carteles, publicaciones y composición tipográfica. Usa movimiento expresivo sin ocultar los proyectos.

- `DESIGN_VARIANCE: 9`
- `MOTION_INTENSITY: 7`
- `VISUAL_DENSITY: 3`

### Sistema visual

- Fondo gris muy claro, texto carbón y naranja como único acento.
- Tipografía sans de gran escala con pesos extremos y módulos tipográficos compactos.
- Formas rectangulares de esquinas completamente rectas.
- Una trama de puntos sutil construida con CSS como textura de fondo, sin ilustraciones falsas.
- Los proyectos mantienen sus colores originales y funcionan como contraste principal.

### Composición

1. Navegación mínima superpuesta sobre un hero tipo póster.
2. Nombre dividido en dos líneas con el retrato integrado en la cuadrícula.
3. Manifiesto breve de diseño, máximo 20 palabras.
4. Galería irregular tipo masonry editorial con los cinco proyectos.
5. Un solo rótulo cinético horizontal para reunir disciplinas.
6. Perfil y contacto como cierre tipográfico de gran escala.

### Movimiento

- Letras del hero aparecen por grupos para reforzar el ritmo de lectura.
- Los proyectos se revelan con desplazamientos alternados mediante `IntersectionObserver`.
- Un solo rótulo horizontal usa animación CSS para comunicar amplitud disciplinar.
- Las tarjetas responden al puntero con transformaciones pequeñas y locales.
- `prefers-reduced-motion` muestra todos los elementos en estado final y detiene el rótulo.

### Adaptación móvil

- La cuadrícula experimental se ordena en una sola columna semántica.
- Se elimina cualquier solapamiento que pueda tapar texto o imágenes.
- El rótulo permanece legible y estático cuando hay movimiento reducido.
- Los enlaces tienen áreas táctiles mínimas de 44 px.

## Accesibilidad y estados

- Documento en español con estructura semántica y un solo `h1`.
- Texto alternativo específico para retrato y trabajos.
- Contraste WCAG AA para texto, controles y estados de foco.
- Foco visible en todos los enlaces.
- El contenido seguirá visible si JavaScript falla; la clase de mejoras se activa solo cuando el script inicia correctamente.
- No habrá formularios, solicitudes de red o estados de carga porque los prototipos son estáticos.
- Los enlaces externos usarán `target="_blank"` con `rel="noreferrer"`.

## Rendimiento

- Sin frameworks, bibliotecas, fuentes externas ni recursos de red obligatorios.
- Imágenes bajo el hero usarán carga diferida y dimensiones o relaciones de aspecto reservadas.
- JavaScript limitado a observación de visibilidad y pequeñas interacciones de puntero.
- Animaciones limitadas a `transform` y `opacity`.

## Verificación

1. Validar que ambos HTML cargan y muestran todas las imágenes.
2. Comprobar todos los enlaces de proyecto y redes.
3. Revisar visualmente a 1440 px, 1024 px, 768 px y 390 px.
4. Verificar navegación por teclado y estados `focus-visible`.
5. Simular `prefers-reduced-motion: reduce`.
6. Buscar desbordamiento horizontal, texto recortado y llamadas a la acción partidas.
7. Confirmar que cada propuesta usa un solo tema, un solo acento y su sistema de formas definido.
8. Revisar cada texto visible para evitar errores, frases vacías y caracteres de raya larga.

## Referencias y principios tomados

- Chungi Yoo: narrativa de proyectos y personalidad visual.
- Synchronized Studio: protagonismo de casos y movimiento ligado a la navegación.
- Bruno Simon: interacción como expresión de la especialidad, aplicada aquí con mucha menor complejidad.
- Creative Bloq, selección 2026: el portafolio debe revelar criterio y personalidad además de mostrar resultados.

Las referencias orientan principios, no se copiarán composiciones, marcas o animaciones específicas.
