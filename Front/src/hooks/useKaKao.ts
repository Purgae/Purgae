import { useEffect } from "react";
import { KAKAO_APP_KEY } from "@/redux/env";

const useKakao = () => {
  const kakaoShare = (gameScore: number) => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      //* 중복 initialization 방지
      if (!kakao.isInitialized()) {
        kakao.init(KAKAO_APP_KEY);
      }

      //* 공유하기
      kakao.Link.sendCustom({
        templateId: 83681,
        templateArgs: {
          Score: gameScore,
        },
      });
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return { kakaoShare };
};

export default useKakao;
