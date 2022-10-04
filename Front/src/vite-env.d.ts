/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API: number;
  readonly VITE_CONTRACT_ADDRESS: string;
  readonly VITE_BE_METAMASK_ADDRESS: string;
  readonly VITE_BE_METAMASK_SECRET_KEY: string;
  readonly VITE_PURGAE_NET_ALCHEMY: string;
  readonly VITE_KAKAO_APP_KEY: string;
  readonly VITE_GA_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// 메타마스크를 설치하면 Window객체에 ethereum 객체가 생성된다.
interface Window {
  ethereum: any;
  Kakao: any;
}
