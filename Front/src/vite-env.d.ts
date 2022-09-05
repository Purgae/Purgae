/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_METAMASK_ADDRESS: string;
  readonly VITE_METAMASK_SECRET_KEY: string;
  readonly VITE_PORT: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
