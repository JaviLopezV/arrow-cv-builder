# Privacidad técnica

Este documento describe implementación; la política pública está en `/privacy`.

## Datos

El CV puede contener identidad, contacto, experiencia, formación, habilidades y texto libre. React lo procesa en navegador. No hay backend, base de datos, API propia, analytics, cookies, autenticación ni envío automático del CV.

Vercel sirve los assets y puede procesar datos técnicos normales de HTTP; el código no añade el CV a esas peticiones. GitHub aloja código, no CVs de usuarios.

## Implementación

- Copy bilingüe y fecha central: `lib/privacy.ts`.
- Metadata/ruta: `app/privacy/page.tsx`.
- Render cliente: `PrivacyPageContent`.
- Aviso local: `SetupStep`.
- Footer y diálogo: `LegalFooter`.
- Claves/borrado: `lib/localData.ts`.

La variable `NEXT_PUBLIC_PRIVACY_CONTACT_EMAIL` se lee en el Server Component y pasa como prop opcional. `NEXT_PUBLIC_` significa que el valor puede incorporarse al cliente; debe ser un correo destinado a publicación, nunca un secreto. Es opcional y está documentada en `.env.example`.

Si se añade analytics, cookies, backend o subida de archivos, revisar código, política, consentimiento y este documento antes de desplegar.
