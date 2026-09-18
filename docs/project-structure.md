# Estructura del proyecto

```text
app/
  layout.tsx              layout raíz, metadata, provider y footer
  page.tsx                ruta /
  privacy/page.tsx        ruta /privacy
  globals.css             app, A4, responsive y print
components/
  wizard/                 pasos y navegación del wizard
  editor/                 controles especializados del editor
  CvEditor.tsx            coordinador del formulario
  CvPreview.tsx           representación A4
  LegalFooter.tsx         footer y borrado local
  PrivacyPageContent.tsx  UI bilingüe de privacidad
lib/
  types.ts                modelo TypeScript
  sampleData.ts           fixtures ES/EN/CA y temas
  cvData.ts               crear, validar, importar y exportar
  i18n.tsx                traducciones, Context y tema MUI
  localData.ts            claves y borrado selectivo
  privacy.ts              contenido técnico/legal bilingüe
docs/                     documentación técnica
```

## `app/`

App Router convierte carpetas y archivos `page.tsx` en rutas. Debe contener rutas, layouts y CSS global; la lógica editable vive en componentes o `lib/`. `layout.tsx` y las páginas son Server Components por defecto. `page.tsx` puede renderizar un Client Component.

No hay `api/`, `route.ts`, middleware ni Server Actions.

## `components/`

Contiene UI propia. `wizard/` controla las tres etapas; `editor/` contiene formularios con una responsabilidad concreta. Los componentes interactivos llevan `"use client"`. No debería contener fixtures globales ni lógica de persistencia reutilizable.

## `lib/`

Contiene tipos, datos declarativos y funciones compartidas. `i18n.tsx` es la excepción con JSX porque proporciona Context y `ThemeProvider`. No existe una carpeta `types/`: el modelo central está deliberadamente en `lib/types.ts`.

## Carpetas inexistentes

No hay `hooks/`, `utils/`, `services/`, `public/` ni suite `tests/`. No deben asumirse servicios o assets que no existen. `node_modules/` y `.next/` son generados y están ignorados.

## Archivos de configuración

- `package.json`: scripts y dependencias.
- `tsconfig.json`: compilación y análisis TypeScript.
- `.eslintrc.json`: calidad y límites de tamaño.
- `next.config.mjs`: `reactStrictMode`.
- `.env.example`: nombre de la variable pública de contacto.
- `.gitignore`: excluye dependencias, builds y `.env*.local`.
