import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => {
  // env 파일: 매개변수로 mode와 command를 받아야함
  // const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    resolve: {
      alias: {
        // 절대 경로 설정
        "@": path.resolve(__dirname, "src"),
        process: "process/browser",
        stream: "stream-browserify",
        zlib: "browserify-zlib",
        util: "util",
        https: "agent-base",
      },
    },
  };
});
