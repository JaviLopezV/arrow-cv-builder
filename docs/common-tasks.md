# Tareas habituales de desarrollo

## Añadir un campo personal

1. Añadirlo en `CvData.personal` (`lib/types.ts`).
2. Añadirlo a `sampleEs`, `sampleEn` y `createEmptyCv`.
3. Validarlo en `isCvData`.
4. Editarlo en `PersonalDataEditor`.
5. Renderizarlo en `CvPreview`.
6. Probar JSON antiguo: decidir migración/default.

## Añadir una clase de sección

1. Ampliar `SectionKind`.
2. Definir qué propiedad de contenido usa (`body`, `cards`, etc.) o ampliar el modelo.
3. Añadir fixture y editor correspondiente.
4. Actualizar `CvSectionAccordion` y `SectionRenderer` si la forma es nueva.
5. Revisar validación e impresión.

## Añadir un paso del wizard

Ampliar `STEPS`, `WizardStep`, labels de `WizardStepper`, estado/render en `CvWizard` y navegación. Revisar print: cualquier control nuevo debe ser `.screen-only`.

## Añadir una traducción

Añadir la misma clave a ES y EN en `ui`; consumir con `useI18n`. Para textos legales largos usar `privacyCopy`. No mezclar idioma UI con `CvData.language`.

## Guardar una preferencia

Definir una clave con prefijo del proyecto en `lib/localData.ts`, incluirla en `LOCAL_STORAGE_KEYS`, leerla tras montaje y documentarla en privacidad/estado. No usar `localStorage.clear()`.

## Crear un componente

Usar `.tsx` si renderiza JSX. Definir `type Props`, importar tipos con `import type` cuando sea posible y añadir `"use client"` solo si usa hooks, handlers o APIs del navegador. Mantener función <200 líneas y archivo <300.

## Modificar PDF/A4

Cambiar primero clases `.cv-*`, después comprobar desktop, 320 px y `@media print`. No convertir la hoja a ancho fluido. Probar múltiples páginas y fondos.

## Añadir un type

Ubicar modelos compartidos en `lib/types.ts`; tipos locales de props junto al componente. Si afecta datos importados, actualizar el type guard runtime: TypeScript no valida JSON.
