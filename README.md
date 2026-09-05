# Next CV Builder

Aplicación simple para crear un CV con Next.js y Material UI, sin base de datos. Está pensada para editar un CV visualmente parecido a los ejemplos HTML incluidos en la petición: cabecera con gradiente, sidebar, columna principal, chips, experiencia, proyectos y exportación a PDF usando la impresión del navegador.

## Technical documentation

La documentación completa está en [docs/README.md](./docs/README.md). Incluye una ruta de lectura para desarrolladores que vienen de JavaScript y están aprendiendo TypeScript, además de arquitectura, modelo de datos, componentes, estado, responsive, impresión, privacidad, lint y despliegue.

## Qué incluye

- Next.js 14.2.35 con App Router.
- Material UI para el editor.
- Sin backend y sin base de datos.
- Persistencia local con `localStorage`.
- Plantilla A4 imprimible.
- Soporte para una o varias páginas.
- Cambio de idioma entre español e inglés.
- Selector de colores/estilo sobre una única plantilla.
- Secciones editables y secciones personalizadas.
- Descarga como PDF mediante `window.print()`.
- Política de privacidad bilingüe en `/privacy`.
- Borrado selectivo de los datos locales desde el footer.

## Privacidad y configuración

El CV se procesa en el navegador y la aplicación no dispone de backend ni base de datos. Se utilizan estas claves de `localStorage`:

- `next-cv-builder-data`: copia local del CV.
- `next-cv-builder-app-language`: idioma de la interfaz.

Para mostrar un correo de contacto en la política de privacidad, copia `.env.example` como `.env.local` y configura:

```bash
NEXT_PUBLIC_PRIVACY_CONTACT_EMAIL=privacy@tu-dominio.com
```

No publiques un correo que no quieras hacer visible. En producción, configura la misma variable en **Vercel → Project Settings → Environment Variables** y vuelve a desplegar la aplicación.

## Requisitos

- Node.js 18 o superior.
- npm, pnpm o yarn.

## Cómo arrancar

```bash
npm install
npm run dev
```

Después abre:

```bash
http://localhost:3000
```

## Cómo descargar el CV

1. Edita los datos en el panel izquierdo.
2. Revisa el resultado en la vista previa A4.
3. Pulsa **Descargar / imprimir PDF**.
4. En el diálogo del navegador, elige **Guardar como PDF**.
5. Activa la opción de imprimir fondos o gráficos si el navegador lo ofrece, para conservar el gradiente y los colores.

## Cómo usar varias páginas

Pulsa **Añadir página**. Cada sección tiene dos controles:

- **Página**: permite mover esa sección a la página 1, 2, 3, etc.
- **Columna**: permite elegir si aparece en el sidebar o en la columna principal.

La app no usa auto-paginación inteligente. La decisión de qué contenido va en cada página queda en manos del usuario para tener control visual sobre el CV final.

## Cómo añadir secciones que no estaban en el ejemplo

Pulsa **Añadir sección personalizada**. Se creará una sección nueva en la última página, en la columna principal. Puedes cambiar:

- Título.
- Página.
- Columna.
- Contenido por líneas.
- Activarla o desactivarla.
- Eliminarla.

## Idioma español / inglés

El selector **Idioma de salida** carga un ejemplo base en español o inglés. El contenido es editable, así que también puedes usarlo como punto de partida y modificar los textos libremente.

Importante: cambiar el idioma vuelve a cargar el contenido de ejemplo en ese idioma. Si ya has escrito contenido personalizado y quieres conservarlo, duplica el proyecto o copia tu texto antes de cambiar de idioma.

## Colores / estilo

De momento hay una sola plantilla, pero con varios presets de color:

- Berry / Magenta.
- Navy / Blue.
- Forest / Mint.
- Minimal Black.

Los colores se aplican mediante variables CSS en la previsualización del CV.

## Estructura del proyecto

```text
next-cv-builder/
  app/
    globals.css       # Estilos globales, A4 y print CSS
    layout.tsx        # Layout base de Next.js
    page.tsx          # Pantalla principal
  components/
    CvEditor.tsx      # Editor Material UI
    CvPreview.tsx     # Render del CV imprimible
  lib/
    sampleData.ts     # Datos de ejemplo ES/EN y temas
    types.ts          # Tipos TypeScript
  package.json
  README.md
```

## Personalización técnica

Para crear más plantillas en el futuro, una forma simple sería:

1. Crear más componentes de preview, por ejemplo `ClassicTemplate`, `ModernTemplate`, etc.
2. Añadir un campo `templateId` a `CvData`.
3. Renderizar el componente correcto según `templateId`.

Para exportación PDF más avanzada, podrías añadir una API route con Playwright o Puppeteer. Esta versión evita backend para cumplir el requisito de app simple sin base de datos.

## Limitaciones actuales

- No hay autenticación ni base de datos.
- No hay drag & drop.
- La descarga PDF depende del diálogo de impresión del navegador.
- La paginación es manual: el usuario decide qué secciones van en cada página.
