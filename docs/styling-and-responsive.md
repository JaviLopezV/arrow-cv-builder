# Estilos, Material UI y responsive

La app combina Material UI (`sx`) para la interfaz y CSS global para fondo, documento A4 y print.

## Tema MUI

`lib/i18n.tsx` crea `appTheme`: paleta berry, tipografía, radios y overrides de `Button`, `Card`, `Accordion` y `ToggleButton`. `ThemeProvider` lo expone a toda la aplicación.

Componentes usados: `Box` (contenedor), `Stack` (flex y espaciado), `Grid` (rejilla), `Typography`, `Button`, `TextField`, `Paper`, `Card`, `Accordion`, `Dialog`, `Select`, `Chip`, `IconButton`, `Alert`, `Switch`, `Radio` y `ToggleButtonGroup`. No se usan `Tabs`.

## `sx`

`sx` acepta valores del tema y objetos responsive:

```tsx
<Stack direction={{ xs: "column", sm: "row" }} />
```

Significa columna desde móvil y fila a partir de `sm`. Los breakpoints estándar de MUI son `xs` (0), `sm` (600), `md` (900), `lg` (1200), `xl` (1536). El proyecto usa principalmente `xs`, `sm`, `md` y `lg`.

## Layouts

- Setup: una columna móvil; cards en dos columnas desde `sm`.
- Editor: selector Editor/Preview hasta `lg`; dos columnas desde `lg`.
- Panel editor: sticky y scroll interno en desktop.
- Barra Volver/Siguiente: sticky con `env(safe-area-inset-bottom)`.
- Footer y acciones: apilados en móvil.

## Preview A4

El documento siempre mide `210mm × 297mm`. `CvPreview` calcula:

```text
scale = min(1, availableWidth / A4WidthAt96Dpi)
```

`.cv-page` conserva dimensiones físicas y recibe `transform: scale(...)`. `.cv-page-frame` adopta ancho/alto escalados; así el layout reserva el espacio visual real y no deja huecos gigantes entre páginas. `ResizeObserver` recalcula al cambiar el contenedor.

## CSS global

`app/globals.css` contiene reset mínimo, fondo, textura, clases A4 y media queries. Bajo 600 px neutraliza márgenes negativos de `Grid` v5 que podrían causar overflow. Las variables `--purple`, `--magenta`, `--text`, etc. se asignan inline desde `ThemePreset` y solo estilizan el CV.

No sustituir `width: 210mm` por `100%`: alteraría la composición que se imprime.
