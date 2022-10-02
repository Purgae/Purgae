import { useState } from "react";
import { RootComponent, FontP } from "@/common/Common.styled";
import { StyledGameContainer, StyleGameSoundButton } from "./Game.styled";

//* 기본 게임 캐릭터
import littleproomy_pink from "/assets/proomy/littleproomy_pink.png";

//* BGM
import game_bgm from "/assets/sound/game_bgm.mp3";
import game_button from "/assets/sound/game_button.mp3";
import game_coin from "/assets/sound/game_coin.mp3";
import useAudio from "@/hooks/useAudio";

//* 컴포넌트
import GameMain from "./components/GameMain/GameMain";
import GameDesc from "./components/GameDesc/GameDesc";
import GamePlay from "./components/GamePlay/GamePlay";
import GameResult from "./components/GameResult/GameResult";
import GameRanking from "./components/GameRanking/GameRanking";
import GameStart from "./components/GameStart/GameStart";

const Game = () => {
  //* 0: 메인, 1: 게임 캐릭터 선택,  2: 게임 플레이,  3:  플레이 결과, 4: 게임 설명 ,5: 게임 랭킹
  const [gamePage, setGamePage] = useState<number>(0);

  //* 게임 캐릭터
  const [gameCharacter, setGameCharacter] = useState<string>(littleproomy_pink);

  //* 게임 스코어
  const [gameScore, setGameScore] = useState<number>(0);

  //* BGM
  const { playing: playingGameBGM, turnOn: turnOnGameBGM, turnOff: turnOffGameBGM } = useAudio(game_bgm, true);
  const { turnOn: turnOnCoinSound } = useAudio(game_coin, false);
  const {
    playing: playingGameButton,
    turnOn: turnOnGameButton,
    turnOff: turnOffGameButton,
  } = useAudio(game_button, false);

  const toggleGameBGM = () => {
    playingGameBGM ? turnOffGameBGM() : turnOnGameBGM();
  };

  const toggleGameButton = () => {
    playingGameButton ? turnOffGameButton() : turnOnGameButton();
  };

  return (
    <RootComponent>
      <StyledGameContainer width="100%" height="calc(100vh - 5rem)">
        {/* BGM 버튼 */}
        <StyleGameSoundButton onClick={toggleGameBGM} type="button">
          {playingGameBGM ? (
            // BGM Off
            <>
              <FontP fontSize="3rem" className="material-icons">
                headset_off
              </FontP>
              <FontP fontSize="1.5rem" fontWeight="medium" style={{ marginTop: "-0.2rem" }}>
                OFF
              </FontP>
            </>
          ) : (
            // BGM On
            <>
              <FontP fontSize="3rem" className="material-icons">
                headset
              </FontP>
              <FontP fontSize="1.5rem" fontWeight="medium" style={{ marginTop: "-0.2rem" }}>
                ON
              </FontP>
            </>
          )}
        </StyleGameSoundButton>

        {/* 게임 화면 */}
        {gamePage === 0 && <GameMain setGamePage={setGamePage} toggleSound={toggleGameButton} />}
        {gamePage === 1 && (
          <GameStart
            setGamePage={setGamePage}
            toggleSound={toggleGameButton}
            turnOnGameBGM={turnOnGameBGM}
            setGameCharacter={setGameCharacter}
          />
        )}
        {gamePage === 2 && (
          <GamePlay
            setGamePage={setGamePage}
            gameCharacter={gameCharacter}
            toggleSound={turnOnCoinSound}
            gameScore={gameScore}
            setGameScore={setGameScore}
          />
        )}
        {gamePage === 3 && (
          <GameResult setGamePage={setGamePage} gameScore={gameScore} toggleSound={toggleGameButton} />
        )}
        {gamePage === 4 && <GameDesc setGamePage={setGamePage} toggleSound={toggleGameButton} />}
        {gamePage === 5 && <GameRanking setGamePage={setGamePage} toggleSound={toggleGameButton} />}
      </StyledGameContainer>
    </RootComponent>
  );
};

export default Game;
