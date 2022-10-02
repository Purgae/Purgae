import { useState, useEffect } from "react";
import { useLazyCheckNicknameQuery } from "@/redux/api/userApi";
import { selectUser } from "@/redux/slices/userSlice";
import { useAppSelector } from "@/hooks/storeHook";

const badWords = ["병신", "시발", "바보", "개새끼", "ㅅ1발", "ㅄ", "ㅅㅂ", "죽어"];

const useInput = () => {
  const { user } = useAppSelector(selectUser);
  const [inputValue, setInputValue] = useState<string>(user!.nickname);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [inputStatus, setInputStatus] = useState<boolean>(true);
  const [checkNickname] = useLazyCheckNicknameQuery();

  //* 유효성 검사
  const checkValueLength = () => {
    const check = inputValue.length >= 2;
    return check;
  };

  //* 유효성 검사
  const checkBadWords = () => {
    const check = badWords.some((item) => inputValue.includes(item));
    return !check;
  };

  //* 500ms 동안 입력이 발생하지 않으면 유효성 검사 실행
  useEffect(() => {
    const debounce = setTimeout(async () => {
      setInputStatus(true);
      setErrorMessage("");

      //* 기존 닉네임과 같으면 return;
      if (user!.nickname === inputValue) return;

      //* 공백 지우기
      setInputValue(inputValue.trim());

      //* 최소 글자 체크
      const checkLength = checkValueLength();
      if (!checkLength) {
        setInputStatus(false);
        setErrorMessage("닉네임은 최소 2글자입니다.");
        return;
      }

      //* 비속어 체크
      const checkBadWord = checkBadWords();
      if (!checkBadWord) {
        setInputStatus(false);
        setErrorMessage("비속어가 포함되어 있습니다.");
      }

      //TODO_PJK: API 수정 후, 중복 글자 체크 처리
      //* 중복 글자 체크
      try {
        // const params = encodeURIComponent(encodeURIComponent(inputValue));
        // await checkNickname(params);
      } catch (error) {
        console.error(error);
      }
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [inputValue]);

  return { inputValue, errorMessage, inputStatus, setInputValue };
};

export default useInput;
