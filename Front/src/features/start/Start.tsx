import Aquarium from "@/common/Aquarium/Aquarium";
import { useNavigate } from "react-router-dom";
import { Div, Button } from "./Start.styled";

const Start = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/main");
  };
  const fishImages = [
    "http://ipfs.io/ipfs/QmfRw5pNVpwvDKTwfJgeEaJkKR9JHuVgbCmHhTn6Fy9yy7",
    "http://ipfs.io/ipfs/QmXWga8QrWCmFpF8GoYkwqsYkTPE3aXD4TdwpaQvv1HxHF",
  ];
  return (
    <Div>
      <Button fontSize="1.25rem" width="10rem" bgColor="white" fontColor="lightBlue600" onClick={navigateHome}>
        시작하기
      </Button>
      <Aquarium fishImages={fishImages} />
    </Div>
  );
};

export default Start;
