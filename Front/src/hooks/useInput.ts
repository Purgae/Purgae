import { useState, useEffect } from "react";
import { useCheckNicknameMutation } from "@/redux/api/userApi";
import { selectUser } from "@/redux/slices/userSlice";
import { useAppSelector } from "@/hooks/storeHook";

const badWords = ["병신", "시발", "바보", "개새끼", "ㅅ1발", "ㅄ", "ㅅㅂ", "죽어"];

const useInput = () => {
  const { user } = useAppSelector(selectUser);
  const [inputValue, setInputValue] = useState<string>(user!.nickname);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [inputStatus, setInputStatus] = useState<boolean>(true);
  const [checkNickname] = useCheckNicknameMutation();

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

  //* 200ms 동안 입력이 발생하지 않으면 유효성 검사 실행
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
        return;
      }

      //* 중복 글자 체크
      try {
        const res = await checkNickname(inputValue).unwrap();
        if (res.message === "FAIL") {
          setInputStatus(false);
          switch (res.errMsg) {
            case "duplicate error": {
              setErrorMessage("사용 중인 닉네임입니다.");
              return;
            }
            case "slang error": {
              setErrorMessage("비속어가 포함되어 있습니다. ");
              return;
            }
            case "length error": {
              setErrorMessage("닉네임은 최소 2글자입니다.");
              return;
            }
            case "blank error": {
              setErrorMessage("닉네임은 최소 2글자입니다. ");
              return;
            }
          }
        }
      } catch (error) {
        setInputStatus(false);
        setErrorMessage("잠시 후에 시도해 주세요.");
      }
    }, 200);

    return () => {
      clearTimeout(debounce);
    };
  }, [inputValue]);

  return { inputValue, errorMessage, inputStatus, setInputValue };
};

export default useInput;
