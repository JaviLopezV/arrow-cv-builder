# @jlopvil/mui-kit migration

## Scope and compatibility

This inventory covers authored UI in `app/` and `components/`. `@jlopvil/mui-kit@0.2.0` is installed from npm and used only through its public root entrypoint. MUI and MUI Icons were upgraded from 5.15 to 7.x to satisfy the package peer contract and avoid duplicate installations. React 18.3 and Emotion 11.14 are compatible; Next.js is not a library peer.

Verified public exports are: `Button`, `IconButton`, `Surface`, `SelectField`, `Dialog`, `DialogTitle`, `DialogContent`, `DialogActions`, `Section`, `Alert`, `Checkbox`, `Container`, `Grid`, `Link`, `RadioGroup`, `Stack`, `TextField`, `Typography`, the theme/provider APIs and tokens, and all documented public prop/type contracts.

## Inventory and migration order

Usage counts are JSX occurrences before migration.

| Current component | @jlopvil/mui-kit equivalent | Classification | Usage count | Risk |
| --- | --- | --- | ---: | --- |
| MUI `Alert` | `Alert` | DIRECTLY_MIGRATABLE | 5 | Low |
| MUI `Button` | `Button` | DIRECTLY_MIGRATABLE | 19 | Low |
| MUI `Container` | `Container` | DIRECTLY_MIGRATABLE | 3 | Low |
| MUI `IconButton` | `IconButton` | DIRECTLY_MIGRATABLE | 5 | Low |
| MUI `Link` | `Link` | DIRECTLY_MIGRATABLE | 4 | Low |
| MUI `Stack` | `Stack` | DIRECTLY_MIGRATABLE | 36 | Low |
| MUI `TextField` | `TextField` | DIRECTLY_MIGRATABLE | 18 | Low |
| MUI `Typography` | `Typography` | DIRECTLY_MIGRATABLE | 30 | Low |
| MUI dialog shell | Library dialog shell | MIGRATABLE_WITH_ADAPTATION | 1 | Low–Medium |
| MUI v5 `Grid` API | Library `Grid` (MUI v7 API) | MIGRATABLE_WITH_ADAPTATION | 25 | Medium |
| MUI `Paper` | `Surface` | MIGRATABLE_WITH_ADAPTATION | 8 | Medium |
| MUI `Select` + options | `SelectField` | MIGRATABLE_WITH_ADAPTATION | 3 | Medium |
| MUI `Box` | None | NO_EQUIVALENT | 25 | Medium |
| MUI `Chip`, `Tooltip`, `Divider`, `Switch`, `CircularProgress` | None | LIBRARY_GAP | 11 combined | Medium |
| Editors, wizard, CV preview and privacy/legal compositions | None | PROJECT_SPECIFIC | Multiple | High |

## First migration

Low-risk primitives and the compatible dialog shell now import from `@jlopvil/mui-kit`. `DialogContentText` remains a direct MUI import because the library does not export it. Grid uses MUI `GridLegacy` after the peer upgrade, preserving the old responsive layout API and visual behavior. No local component became unused or was deleted.

## Second-phase candidates

Migrate `GridLegacy` layouts individually to the library Grid `size` API; evaluate Paper panels against `Surface`; convert suitable controlled selects to `SelectField`; and evaluate `MyUiProvider` only with theme and color-mode regression coverage.
