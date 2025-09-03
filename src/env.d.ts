interface ImportMetaEnv {
  readonly VITE_GTM_ID?: string;
  // Agrega aquí otras variables VITE_ si las necesitas
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
