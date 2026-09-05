# Estado y almacenamiento

## Estado React

Existe solo mientras la pestaña está cargada y provoca renders. `CvWizard` mantiene el CV completo; los hijos reciben props. El Context global mantiene idioma de interfaz y tema MUI. No hay Redux, Zustand, estado URL ni datos remotos.

## `localStorage`

| Clave | Formato | Lee | Escribe | Eliminación |
|---|---|---|---|---|
| `next-cv-builder-data` | JSON de `CvData` | `CvWizard` al montar | efecto tras inicializar/cambiar | datos inválidos o acción global |
| `next-cv-builder-app-language` | `"es"` o `"en"` | `I18nProvider` | `setLanguage` | acción global |

Las constantes están en `lib/localData.ts`. `deleteApplicationLocalData` usa `removeItem` por clave, nunca `clear()`, y emite `next-cv-builder:local-data-cleared`. Provider y wizard escuchan ese evento para sincronizar UI sin reload.

`localStorage` es síncrono, persistente y específico del origin. Solo está disponible en navegador; de ahí la lectura en `useEffect` y el flag `hydrated`.

## Comparación

- React state: memoria de la sesión y UI reactiva.
- `localStorage`: persiste strings entre sesiones en ese navegador.
- `sessionStorage`: duraría una pestaña; no se usa.
- Cookies: pueden viajar en HTTP; no se usan.
- Base de datos: persistencia remota multi-dispositivo; no existe.

## Ciclo de persistencia

Al montar se intenta `JSON.parse` + `parseCvFile`. Si falla, la clave corrupta se elimina. El guardado comienza solo cuando `hydrated`, `initialized` y `data` son truthy, evitando sobrescribir prematuramente un CV existente.
