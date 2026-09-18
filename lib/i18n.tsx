"use client";

import { ReactNode, useEffect } from "react";
import {
  APP_LANGUAGE_STORAGE_KEY,
  LOCAL_DATA_CLEARED_EVENT,
} from "./localData";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "./appTheme";
import { caUi } from "./caUi";
import i18next from "i18next";
import { I18nextProvider, useTranslation } from "react-i18next";

export type AppLanguage = "es" | "en" | "ca";

export const ui = {
  es: {
    appLanguage: "Idioma de la aplicación",
    setup: "Configuración",
    template: "Plantilla",
    edit: "Editar",
    export: "Exportar",
    step: "Paso",
    of: "de",
    createCv: "Crea tu CV",
    setupIntro: "Configura cómo quieres empezar.",
    chooseTemplate: "Escoge una plantilla",
    templateIntro:
      "Elige la estructura visual de tu CV. Podrás cambiar los colores en el editor.",
    originalTemplate: "Original",
    cvLanguage: "Idioma del CV",
    spanish: "Español",
    english: "English",
    catalan: "Català",
    howStart: "¿Cómo quieres empezar?",
    resume: "Continuar con mi CV",
    resumeDetail: "Tus últimos cambios guardados",
    sample: "Usar CV de ejemplo",
    sampleDetail: "Carga un CV completo como punto de partida",
    empty: "Empezar desde cero",
    emptyDetail: "Crea una estructura vacía y lista para editar",
    importCv: "Importar CV",
    importDetail: "Carga un archivo JSON exportado por la aplicación",
    jsonExampleTitle: "Ejemplo de archivo JSON",
    jsonExampleDetail:
      "Descarga un archivo válido con el CV de ejemplo para consultar su estructura o usarlo como plantilla.",
    downloadJsonExample: "Descargar JSON de ejemplo",
    privacy: "Privacidad",
    privacyPolicy: "Política de privacidad",
    privacyNotice:
      "Tu CV se guarda localmente en este dispositivo y no almacenamos su contenido en nuestros servidores.",
    learnMore: "Más información",
    deleteLocalData: "Eliminar datos locales",
    deleteLocalDataTitle: "¿Eliminar los datos locales?",
    deleteLocalDataMessage:
      "Esto eliminará de este navegador los CVs y preferencias almacenados por esta aplicación. Esta acción no se puede deshacer.",
    cancel: "Cancelar",
    delete: "Eliminar",
    continueEditor: "Continuar al editor →",
    continueTemplate: "Escoger plantilla →",
    editor: "Editor",
    preview: "Vista previa",
    editorViewLabel: "Vista del editor",
    back: "← Volver",
    next: "Siguiente →",
    reviewExport: "Revisa y exporta",
    reviewDetail:
      "Comprueba el resultado final antes de imprimirlo o guardar sus datos.",
    missingName: "Tu CV todavía no tiene nombre.",
    missingExperience: "No has añadido experiencia.",
    backEdit: "← Volver a editar",
    exportData: "Exportar datos (.json)",
    printPdf: "Descargar / Imprimir PDF",
    style: "Colores / estilo",
    helper:
      "Los datos se guardan en localStorage. Para descargar, usa el botón de impresión y elige “Guardar como PDF”.",
    addPage: "Añadir página",
    deleteLastPage: "Eliminar última página",
    addSection: "Añadir sección personalizada",
    resetSample: "Restablecer con ejemplo",
    personalData: "Datos personales",
    showPhoto: "Mostrar fotografía en el CV",
    personPhoto: "Fotografía de la persona",
    addPhoto: "Añadir foto",
    changePhoto: "Cambiar foto",
    removePhoto: "Eliminar",
    photoHelp: "PNG, JPG o WebP. Tamaño máximo: 1,5 MB.",
    photoInvalid: "Selecciona un archivo de imagen válido.",
    photoTooLarge: "La imagen supera el tamaño máximo de 1,5 MB.",
    photoReadError: "No se ha podido leer la imagen.",
    name: "Nombre",
    role: "Rol",
    commaTags: "Tags separados por coma",
    phone: "Teléfono",
    sections: "Secciones",
    page: "Página",
    column: "Columna",
    sidebar: "Sidebar",
    main: "Principal",
    title: "Título",
    deleteSection: "Eliminar sección",
    item: "Elemento",
    addItem: "Añadir elemento",
    deleteItem: "Eliminar elemento",
    text: "Texto",
    companyTitle: "Empresa / título",
    positionSubtitle: "Cargo / subtítulo",
    dateLocation: "Fecha y ubicación",
    description: "Descripción",
    bullets: "Bullets, uno por línea",
    groupName: "Nombre del grupo",
    deleteGroup: "Eliminar grupo",
    newTechnology: "Nueva tecnología",
    add: "Añadir",
    addGroup: "Añadir grupo",
    replaceCurrent:
      "Esta opción sustituirá el contenido actual. ¿Quieres continuar?",
    resetConfirm:
      "Esto sustituirá el contenido actual por el CV de ejemplo. ¿Quieres continuar?",
    readError: "No se ha podido leer el archivo.",
    invalidFile: "El archivo no contiene datos de CV válidos.",
    unsupportedFile:
      "El archivo usa una versión que esta aplicación todavía no admite.",
    pageHasSections:
      "La página {{page}} contiene secciones. Al eliminarla también se borrará su contenido. ¿Quieres continuar?",
  },
  en: {
    appLanguage: "Application language",
    setup: "Setup",
    template: "Template",
    edit: "Edit",
    export: "Export",
    step: "Step",
    of: "of",
    createCv: "Create your CV",
    setupIntro: "Choose how you want to get started.",
    chooseTemplate: "Choose a template",
    templateIntro:
      "Choose your CV layout. You can change its colors in the editor.",
    originalTemplate: "Original",
    cvLanguage: "CV language",
    spanish: "Español",
    english: "English",
    catalan: "Català",
    howStart: "How would you like to start?",
    resume: "Continue with my CV",
    resumeDetail: "Your latest saved changes",
    sample: "Use sample CV",
    sampleDetail: "Load a complete CV as a starting point",
    empty: "Start from scratch",
    emptyDetail: "Create an empty structure ready to edit",
    importCv: "Import CV",
    importDetail: "Load a JSON file exported by the application",
    jsonExampleTitle: "JSON file example",
    jsonExampleDetail:
      "Download a valid file containing the sample CV to inspect its structure or use it as a template.",
    downloadJsonExample: "Download sample JSON",
    privacy: "Privacy",
    privacyPolicy: "Privacy Policy",
    privacyNotice:
      "Your CV is stored locally on this device and its content is not stored on our servers.",
    learnMore: "Learn more",
    deleteLocalData: "Delete local data",
    deleteLocalDataTitle: "Delete local data?",
    deleteLocalDataMessage:
      "This will delete the CVs and preferences stored by this application from this browser. This action cannot be undone.",
    cancel: "Cancel",
    delete: "Delete",
    continueEditor: "Continue to editor →",
    continueTemplate: "Choose template →",
    editor: "Editor",
    preview: "Preview",
    editorViewLabel: "Editor view",
    back: "← Back",
    next: "Next →",
    reviewExport: "Review and export",
    reviewDetail:
      "Check the final result before printing it or saving its data.",
    missingName: "Your CV does not have a name yet.",
    missingExperience: "You have not added any experience.",
    backEdit: "← Back to editor",
    exportData: "Export data (.json)",
    printPdf: "Download / Print PDF",
    style: "Colors / style",
    helper:
      "Your data is saved in localStorage. To download, use the print button and choose “Save as PDF”.",
    addPage: "Add page",
    deleteLastPage: "Delete last page",
    addSection: "Add custom section",
    resetSample: "Reset with sample",
    personalData: "Personal details",
    showPhoto: "Show photo on the CV",
    personPhoto: "Person photo",
    addPhoto: "Add photo",
    changePhoto: "Change photo",
    removePhoto: "Remove",
    photoHelp: "PNG, JPG or WebP. Maximum size: 1.5 MB.",
    photoInvalid: "Select a valid image file.",
    photoTooLarge: "The image exceeds the 1.5 MB size limit.",
    photoReadError: "The image could not be read.",
    name: "Name",
    role: "Role",
    commaTags: "Comma-separated tags",
    phone: "Phone",
    sections: "Sections",
    page: "Page",
    column: "Column",
    sidebar: "Sidebar",
    main: "Main",
    title: "Title",
    deleteSection: "Delete section",
    item: "Item",
    addItem: "Add item",
    deleteItem: "Delete item",
    text: "Text",
    companyTitle: "Company / title",
    positionSubtitle: "Role / subtitle",
    dateLocation: "Date and location",
    description: "Description",
    bullets: "Bullets, one per line",
    groupName: "Group name",
    deleteGroup: "Delete group",
    newTechnology: "New technology",
    add: "Add",
    addGroup: "Add group",
    replaceCurrent:
      "This option will replace the current content. Do you want to continue?",
    resetConfirm:
      "This will replace the current content with the sample CV. Do you want to continue?",
    readError: "The file could not be read.",
    invalidFile: "The file does not contain valid CV data.",
    unsupportedFile:
      "The file uses a version that this application does not support yet.",
    pageHasSections:
      "Page {{page}} contains sections. Deleting it will also remove its content. Do you want to continue?",
  },
  ca: caUi,
} as const;

type TranslationKey = keyof (typeof ui)["es"];
type I18nValue = Omit<Record<TranslationKey, string>, "pageHasSections"> & {
  pageHasSections: (page: number) => string;
};

if (!i18next.isInitialized) {
  void i18next.init({
    resources: {
      es: { translation: ui.es },
      en: { translation: ui.en },
      ca: { translation: ui.ca },
    },
    lng: "es",
    fallbackLng: "es",
    initAsync: false,
    interpolation: { escapeValue: false },
  });
}

export function I18nProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const stored = window.localStorage.getItem(APP_LANGUAGE_STORAGE_KEY);
    if (stored === "es" || stored === "en" || stored === "ca")
      void i18next.changeLanguage(stored);
    const handleLocalDataCleared = () => void i18next.changeLanguage("es");
    window.addEventListener(LOCAL_DATA_CLEARED_EVENT, handleLocalDataCleared);
    return () =>
      window.removeEventListener(
        LOCAL_DATA_CLEARED_EVENT,
        handleLocalDataCleared,
      );
  }, []);

  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
    </I18nextProvider>
  );
}

export function useI18n() {
  const { t: translate, i18n } = useTranslation();
  const language: AppLanguage =
    i18n.resolvedLanguage === "en"
      ? "en"
      : i18n.resolvedLanguage === "ca"
        ? "ca"
        : "es";
  const t = Object.fromEntries(
    Object.keys(ui.es).map((key) => [key, translate(key)]),
  ) as unknown as I18nValue;
  t.pageHasSections = (page) => translate("pageHasSections", { page });
  const setLanguage = (next: AppLanguage) => {
    void i18n.changeLanguage(next);
    document.documentElement.lang = next;
    window.localStorage.setItem(APP_LANGUAGE_STORAGE_KEY, next);
  };
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  return { language, t, setLanguage };
}
