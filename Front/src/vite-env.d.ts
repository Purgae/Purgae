/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_METAMASK_ADDRESS: string;
  readonly VITE_METAMASK_SECRET_KEY: string;
  readonly VITE_PORT: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// 메타마스크를 설치하면 Window객체에 ethereum 객체가 생성된다.
interface Window {
  ethereum: any;
}