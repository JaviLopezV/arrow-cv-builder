# Documentación técnica

Next CV Builder es una aplicación Next.js que crea, edita, previsualiza y exporta CVs sin backend ni base de datos. Esta documentación está pensada para una persona que conoce JavaScript y React, pero empieza con TypeScript, App Router y Material UI.

## Orden recomendado

1. [Estructura del proyecto](./project-structure.md)
2. [Guía de TypeScript](./typescript-guide.md)
3. [Arquitectura](./architecture.md)
4. [Modelo del CV](./cv-model.md)
5. [Flujo de datos](./data-flow.md)
6. [Componentes](./components.md)
7. [Hooks](./hooks.md)
8. [Estado y almacenamiento](./state-and-storage.md)
9. [Estilos y responsive](./styling-and-responsive.md)
10. [Impresión y PDF](./print-and-pdf.md)
11. [i18n](./i18n.md)
12. [Privacidad técnica](./privacy.md)
13. [Testing y lint](./testing-and-linting.md)
14. [Despliegue](./deployment.md)
15. [Glosario](./glossary.md)
16. [Tareas habituales](./common-tasks.md)

## Mapa rápido

- Entrada web: `app/page.tsx`.
- Estado principal: `components/wizard/CvWizard.tsx`.
- Modelo: `lib/types.ts`.
- Validación, importación y exportación: `lib/cvData.ts`.
- Edición: `components/CvEditor.tsx` y `components/editor/`.
- Documento A4: `components/CvPreview.tsx` y `app/globals.css`.
- Traducciones y tema MUI: `lib/i18n.tsx`.
- Persistencia: `lib/localData.ts` y `CvWizard`.

No existen API routes, backend, base de datos, autenticación, custom hooks ni tests automatizados en el estado actual.
