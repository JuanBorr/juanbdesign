# Formulario de contacto funcional

Fecha: 2026-09-05

## Objetivo

Ampliar la página `03 · Contacto` del portafolio multipágina y su equivalente web con un formulario real que entregue los mensajes a `fernandezborrerojuan@gmail.com`. La solución debe conservar el lenguaje de póster cinético y reutilizar el botón negro existente como acción de envío.

## Solución aprobada

El formulario se integrará mediante FormSubmit porque el portafolio actual se genera como sitio estático y no dispone de un servidor propio. El servicio recibirá los datos del formulario y los reenviará al correo indicado. La primera entrega requerirá que Juan confirme el mensaje de activación enviado por FormSubmit.

## Composición visual

La zona central de Contacto conservará dos columnas:

- La columna izquierda mostrará el correo directo, una frase breve de orientación y los enlaces sociales.
- La columna derecha contendrá el formulario y una nota breve de disponibilidad.

El formulario incluirá, en este orden:

1. `Nombre`
2. `Correo electrónico`
3. `Mensaje`
4. Botón negro `ENVIAR MENSAJE`
5. Mensaje de estado para confirmar el envío o explicar un error

Los controles usarán fondo transparente, líneas inferiores negras, tipografía Archivo Narrow y esquinas rectas. El botón reutilizará el aspecto y la posición visual del CTA actual `INICIAR UN PROYECTO`; su texto y función cambiarán a `ENVIAR MENSAJE`.

## Comportamiento web

- Los tres campos serán obligatorios.
- El campo de correo usará validación de tipo `email`.
- El envío se realizará de forma asíncrona a FormSubmit para mantener al usuario en la página.
- Mientras se envía, el botón quedará deshabilitado y mostrará un estado de progreso.
- Tras una respuesta correcta, se mostrará una confirmación y se limpiarán los campos.
- Si el servicio responde con un error o falla la conexión, se mostrará un aviso y se conservará el contenido escrito.
- Se añadirá un campo señuelo oculto para reducir envíos automatizados.
- El correo directo visible y sus enlaces `mailto:` se actualizarán a `fernandezborrerojuan@gmail.com`.

## Alcance en Figma

La página `03 · Contacto` incorporará los tres campos y el estado del formulario como capas editables. No se convertirán textos en vectores. El botón existente se integrará dentro del formulario y se renombrará `CTA / Enviar mensaje`. Figma representará el estado inicial; la funcionalidad real existirá en el sitio web.

## Integración y privacidad

La dirección de destino aparecerá en el marcado necesario para FormSubmit, por lo que no se considerará un secreto. No se almacenarán claves privadas en el repositorio. Los enlaces sociales existentes se mantendrán sin cambios.

## Verificación

Antes de entregar se comprobará:

1. Que Figma muestre Nombre, Correo electrónico, Mensaje y `ENVIAR MENSAJE` sin solapamientos.
2. Que todos los textos nuevos de Figma sean editables, usen las fuentes aprobadas y no existan fuentes faltantes.
3. Que el formulario web valide los campos vacíos y los correos no válidos.
4. Que el estado de carga impida envíos duplicados.
5. Que los estados de éxito y error sean legibles y accesibles.
6. Que la entrega apunte únicamente a `fernandezborrerojuan@gmail.com`.
7. Que el sitio siga funcionando correctamente en escritorio y móvil.
8. Que el proyecto compile sin errores.
