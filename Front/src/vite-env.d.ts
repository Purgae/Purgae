/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_METAMASK_ADDRESS: string;
  readonly VITE_METAMASK_SECRET_KEY: string;
  readonly VITE_PORT: number;
  readonly VITE_BE_METAMASK_ADDRESS: string;
  readonly VITE_BE_METAMASK_SECRET_KEY: string;
  readonly VITE_PURGAE_NET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// 메타마스크를 설치하면 Window객체에 ethereum 객체가 생성된다.
interface Window {
  ethereum: any;
}
