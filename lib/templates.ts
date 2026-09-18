import { TemplatePreset } from "./types";

export const DEFAULT_TEMPLATE_ID = "sidebar";
export const MAGNA_TEMPLATE_ID = "magna";

/** Add future layouts here and implement their renderer in CvPreview. */
export const templatePresets: TemplatePreset[] = [
  {
    id: DEFAULT_TEMPLATE_ID,
    name: { es: "Clásica", en: "Classic", ca: "Clàssica" },
    description: {
      es: "Cabecera amplia con barra lateral y contenido principal.",
      en: "Wide header with a sidebar and main content area.",
      ca: "Capçalera ampla amb barra lateral i contingut principal.",
    },
  },
  {
    id: MAGNA_TEMPLATE_ID,
    name: { es: "Magna", en: "Magna", ca: "Magna" },
    description: {
      es: "Diseño editorial a dos bloques con tonos salvia y crema.",
      en: "Two-panel editorial layout in sage and cream tones.",
      ca: "Disseny editorial de dos blocs amb tons sàlvia i crema.",
    },
  },
];
