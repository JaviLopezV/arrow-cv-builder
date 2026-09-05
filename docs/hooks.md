# Hooks

No existen custom hooks. Los hooks usados son los oficiales de React y `useI18n`, que es un wrapper de Context aunque su nombre tenga forma de hook.

## `useState`

`CvWizard` guarda paso, CV, idioma de contenido, modo de inicio, importación y flags de hidratación. `EditorStep` guarda solo la pestaña móvil. `ChipGroupsEditor` guarda drafts que no forman parte del CV. `LegalFooter` guarda si el diálogo está abierto.

Estado local efímero debe permanecer cerca del componente; el CV completo vive arriba para compartirlo con editor y preview.

## `useEffect`

- `CvWizard`: lee el CV una vez, escucha el evento de borrado y persiste cambios.
- `I18nProvider`: lee idioma, escucha borrado y actualiza `<html lang>`.
- `CvPreview`: observa cambios de ancho mediante `ResizeObserver` y limpia el observer al desmontar.

Un array `[]` ejecuta el efecto después del primer montaje. Un array con dependencias vuelve a ejecutarlo cuando cambian. Omitir valores usados puede crear stale closures: callbacks/efectos conservarían valores antiguos.

## `useMemo`

`CvWizard` busca el `ThemePreset` solo cuando cambia `data?.themeId`. La búsqueda es pequeña; no es esencial para rendimiento, pero expresa que el valor deriva de ese id. No se debe envolver todo en `useMemo`: añade complejidad y no evita renders por sí solo.

## `useRef`

- `SetupStep`: referencia el `<input type="file">` oculto.
- `CvPreview`: referencia el viewport observado.

Cambiar `ref.current` no provoca render.

## `useContext` y `useI18n`

`useI18n` lee `I18nContext` y falla claramente si se usa fuera del provider. Devuelve `language`, `t` y `setLanguage`.

## Hooks no usados

No se usa `useCallback`, reducers ni librerías de store. No conviene introducir `useCallback` salvo que exista una necesidad de identidad estable medible (por ejemplo, un hijo memoizado o dependencia de otro hook).
