# Testing y linting

## Estado actual

No hay Jest, Vitest, Testing Library, Playwright ni archivos `.test.*`/`.spec.*`. Tampoco existe script `test`. La verificación actual es TypeScript, ESLint, build y pruebas manuales.

## ESLint

`npm run lint` ejecuta `next lint --max-warnings=0`. `.eslintrc.json` extiende `next/core-web-vitals` y `next/typescript`.

Reglas propias:

- `max-lines-per-function`: error sobre 200 líneas, ignorando blancos/comentarios e incluyendo IIFEs.
- `max-lines`: error sobre 300 líneas de producción.
- Tests: archivo hasta 600, función siempre hasta 200.
- `lib/sampleData.ts`: archivo hasta 600 por ser fixture declarativo; funciones siguen en 200.

Ante un error de tamaño, extraer una responsabilidad lógica (componente, helper o hook). No usar `eslint-disable` ni mover la misma función gigante.

## Scripts

| Script | Uso |
|---|---|
| `npm run dev` | servidor local con recarga |
| `npm run lint` | reglas de calidad |
| `npm run build` | TypeScript, lint y build de producción |
| `npm run start` | sirve un build ya generado |

## Estrategia futura sugerida

Priorizar tests de `parseCvFile`, creación/export envelope y borrado selectivo; después flujos del wizard y escalado/print. Es deuda técnica, no una suite existente.
