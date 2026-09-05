export const CV_STORAGE_KEY = "next-cv-builder-data";
export const APP_LANGUAGE_STORAGE_KEY = "next-cv-builder-app-language";
export const LOCAL_DATA_CLEARED_EVENT = "next-cv-builder:local-data-cleared";

export const LOCAL_STORAGE_KEYS = [
  CV_STORAGE_KEY,
  APP_LANGUAGE_STORAGE_KEY,
] as const;

export function deleteApplicationLocalData() {
  LOCAL_STORAGE_KEYS.forEach((key) => window.localStorage.removeItem(key));
  window.dispatchEvent(new Event(LOCAL_DATA_CLEARED_EVENT));
}
