# Dependencias y despliegue

## Dependencias principales

| Package | Uso | Dónde |
|---|---|---|
| `next` | App Router, build, metadata y routing | `app/`, scripts |
| `react` / `react-dom` | componentes, hooks e hidratación | toda la UI |
| `@mui/material` | componentes y `ThemeProvider` | `components/`, `lib/i18n.tsx` |
| `@mui/icons-material` | iconografía | wizard/editor/footer |
| `@emotion/react`, `styled`, `cache` | motor de estilos de MUI | soporte runtime de MUI |
| `typescript` | análisis estático | build/desarrollo |
| `@types/node`, `@types/react`, `@types/react-dom` | declaraciones de tipos | TypeScript |
| `eslint`, `eslint-config-next` | calidad y reglas Next | `npm run lint` |

`dependencies` son necesarias en runtime/build de la app. `devDependencies` son herramientas de desarrollo/build; no significa que sean prescindibles para mantener el repositorio.

## Variables de entorno

| Variable | Pública | Obligatoria | Uso |
|---|---:|---:|---|
| `NEXT_PUBLIC_PRIVACY_CONTACT_EMAIL` | Sí | No | email visible en `/privacy` |

No documentar valores reales o secretos. Una variable `NEXT_PUBLIC_` puede terminar en el bundle del navegador.

## Vercel

Configuración inferida del repositorio:

- Framework: Next.js.
- Build command: `npm run build` (Vercel puede detectarlo).
- No hay `vercel.json` ni output custom.
- La aplicación produce rutas estáticas `/` y `/privacy`.

Flujo habitual con integración GitHub: conectar el repositorio en Vercel; cada push/PR puede crear un Preview Deployment y el branch de producción despliega producción según la configuración del proyecto. Estos ajustes viven en Vercel, no pueden verificarse en este repositorio.

Configurar la variable en **Project Settings → Environment Variables** para los entornos deseados y redeploy. Localmente usar `.env.local`, que está ignorado.

## Git y archivos

No subir `node_modules/`, `.next/`, `dist/`, `out/`, `.env*.local` ni secretos. Sí versionar `.env.example` sin secretos. No existe archivo `LICENSE`; no asumir una licencia open-source por alojar el código en GitHub.

## Checklist

1. `npm ci` en instalación reproducible.
2. `npm run lint`.
3. `npm run build`.
4. Configurar variable pública si procede.
5. Probar `/`, `/privacy`, import/export y print en preview.
