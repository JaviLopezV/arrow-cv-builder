# TypeScript para quien viene de JavaScript

TypeScript añade comprobaciones durante desarrollo/build. El navegador recibe JavaScript: `type`, anotaciones y genéricos desaparecen al compilar.

## `.ts`, `.tsx`, `.js` y `.jsx`

- `.ts`: TypeScript sin JSX, como `lib/types.ts`.
- `.tsx`: TypeScript con etiquetas JSX, como `CvPreview.tsx`.
- `.js`/`.jsx`: equivalentes sin tipos; `allowJs: false` evita usarlos aquí.

## Tipos y literales

Ejemplo real:

```ts
export type Language = "es" | "en";
```

En JavaScript sería solo una convención. El `union type` impide `language = "fr"` hasta ampliar el modelo. `Column` y `SectionKind` funcionan igual. No hay `enum` ni `interface` en el proyecto; se usan alias `type`.

Intentar `console.log(CvData)` falla: `CvData` es un tipo, no una variable runtime.

## Objetos, arrays y propiedades opcionales

```ts
export type CvItem = {
  title: string;
  subtitle?: string;
  bullets?: string[];
};
```

`?` significa que la propiedad puede ser `undefined`. JavaScript permitiría cualquier forma; TypeScript exige `title` y que `bullets`, si existe, sea un array de strings. Por eso el preview usa `item.bullets?.length`: optional chaining evita acceder a una propiedad ausente.

## Props y funciones

```ts
type Props = {
  data: CvData;
  onChange: (next: CvData) => void;
};
```

`data: CvData` restringe la entrada. `(next: CvData) => void` exige un callback que recibe un CV y no promete retorno. En JavaScript las props serían el mismo objeto, pero sin verificación previa.

El proyecto no usa `React.FC`; tipa el parámetro de la función directamente. `ReactNode` aparece en `I18nProvider` y `RootLayout` para cualquier contenido renderizable.

## Estado genérico y null

```ts
const [data, setData] = useState<CvData | null>(null);
```

`<CvData | null>` es un generic de React: el estado empieza vacío y luego solo admite un CV válido o `null`. Sin él, TypeScript podría inferir únicamente `null`. Los booleanos y strings simples suelen inferirse sin generic.

## Refs y eventos

```ts
const inputRef = useRef<HTMLInputElement>(null);
const handleFile = async (event: ChangeEvent<HTMLInputElement>) => { ... };
```

El generic describe el nodo DOM. `ChangeEvent<HTMLInputElement>` permite acceder con seguridad a `files` y `value`. `KeyboardEvent<HTMLInputElement>` se usa al añadir chips con Enter.

## `keyof` y acceso indexado

```ts
type Personal = CvData["personal"];
field: keyof Personal
```

El primer tipo reutiliza exactamente la forma de `personal`; el segundo solo permite sus claves. Evita duplicar listas y errores como `"fristName"`.

## Utility types reales

- `Partial<CvData>`: todas las propiedades pasan a opcionales para un patch.
- `Partial<CvItem>` y `Partial<ChipGroup>`: actualizaciones parciales.
- `Record<number, string>`: drafts de chips indexados por número.

No se usan `Pick`, `Omit`, `Required`, `ReturnType`, `Parameters` ni `PropsWithChildren` actualmente.

## `typeof`, `as const` y tipos derivados

```ts
export const STEPS = { SETUP: 0, EDITOR: 1, EXPORT: 2 } as const;
export type WizardStep = (typeof STEPS)[keyof typeof STEPS];
```

`as const` conserva los valores literales `0 | 1 | 2`; `typeof` obtiene el tipo del objeto y `keyof` sus claves. En runtime solo queda el objeto `STEPS`.

Las traducciones también usan `as const`, y `I18nValue` deriva su forma de `ui`. No aparece el operador `satisfies`.

## `unknown`, narrowing y type guards

```ts
export function parseCvFile(value: unknown): CvData;
```

`unknown` obliga a comprobar antes de usar. `typeof`, `Array.isArray`, comparaciones e `in` estrechan (`narrow`) el tipo. `isStringArray(value): value is string[]` es un type guard. Es más seguro que `any`, que desactiva verificaciones; no hay `any` explícito en código propio.

## Assertions con `as`

`value as Partial<CvFile>` comunica al compilador una interpretación, pero no valida runtime. Por eso `parseCvFile` comprueba cada campo después. `event as KeyboardEvent<HTMLInputElement>` adapta un evento de MUI; abusar de `as` puede ocultar bugs.

No se usa non-null assertion (`value!`), `never`, overloads ni discriminated unions estrictas.

## `Promise<T>` y async

La prop `onImport: (file: File) => Promise<CvData>` dice que la operación asíncrona resolverá un CV. `await file.text()` devuelve texto; después se parsea y valida. En JavaScript el contrato solo se descubriría ejecutando.

## `tsconfig.json`

| Opción                           | Efecto real                                              |
| -------------------------------- | -------------------------------------------------------- |
| `target: es2017`                 | nivel de JavaScript objetivo                             |
| `lib: dom, dom.iterable, esnext` | tipos de navegador y APIs modernas                       |
| `allowJs: false`                 | no incluye `.js` como fuente                             |
| `strict: true`                   | activa comprobaciones estrictas, incluido null           |
| `noEmit: true`                   | TypeScript comprueba; Next.js emite el build             |
| `skipLibCheck: true`             | no revisa internamente todos los `.d.ts` de dependencias |
| `esModuleInterop: true`          | interoperabilidad de imports CommonJS/ESM                |
| `module: esnext`                 | conserva módulos modernos                                |
| `moduleResolution: bundler`      | resuelve imports como el bundler de Next                 |
| `resolveJsonModule: true`        | permitiría importar JSON tipado                          |
| `isolatedModules: true`          | cada archivo debe poder transformarse aislado            |
| `jsx: preserve`                  | Next procesa JSX                                         |
| `incremental: true`              | cachea información para comprobaciones posteriores       |
| `plugins: next`                  | integración de tipos de Next.js                          |
| `paths: @/* -> ./*`              | `@/components/...` apunta a la raíz                      |

`include` incorpora `.ts`, `.tsx`, tipos de Next y tipos generados; `exclude` omite `node_modules`.

## Errores comunes para desarrolladores JavaScript

1. Tratar un `type` como valor runtime.
2. Usar `any` para silenciar un error en vez de modelar o validar.
3. Añadir un valor a una union sin actualizar datos y traducciones.
4. Olvidar propiedades opcionales y acceder sin `?.` o comprobación.
5. Confiar en `as` como si validase JSON.
6. Leer `localStorage` en un Server Component o antes de montar.
7. Olvidar `"use client"` al usar hooks, eventos o `window`.
8. Mutar arrays/objetos y esperar que React detecte el cambio.
9. Cambiar `CvData` sin actualizar `isCvData`, fixtures, editor y preview.
10. Añadir `!` sin garantizar que el valor exista.
