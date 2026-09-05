# Impresión y PDF

No existe un generador PDF ni servicio remoto. “Descargar / Imprimir PDF” ejecuta `window.print()` y abre el diálogo nativo. Guardar como PDF depende del navegador/sistema.

## Documento

`.cv-page` representa exactamente una hoja A4:

- ancho: `210mm`;
- alto/min-height: `297mm`;
- `overflow: hidden`;
- contenido organizado por `.cv-header` y `.cv-content`.

`@page { size: A4; margin: 0; }` comunica formato al motor de impresión.

## `@media print`

- Fuerza `html`, `body`, containers y área imprimible a `210mm`.
- Oculta `.screen-only`: wizard, editor, controles, footer.
- Elimina fondo de aplicación, sombras y transform visual.
- Restablece `.cv-page` a escala 1.
- Usa `break-after: page`/`page-break-after` salvo en la última hoja.
- Mantiene colores con `print-color-adjust: exact`.

Cada `cv-page-frame` también vuelve a `210mm × 297mm`. Esto evita que la escala móvil afecte al papel. Las páginas múltiples provienen de `pageCount`; el preview no autopagina contenido. Si una sección excede su hoja, queda recortada y el usuario debe redistribuirla.

## Mantenimiento seguro

Al cambiar print CSS, comprobar una y varias páginas y ausencia de hojas blancas. MUI `Stack` puede conservar spacing de hijos ocultos; las reglas actuales eliminan márgenes en `.wizard-content` y `.export-step`. No aplicar `transform`, padding o gaps nuevos dentro de print sin revisar el PDF.
