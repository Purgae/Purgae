import Aquarium from "@/common/Aquarium/Aquarium";
import { useNavigate } from "react-router-dom";
import { Div, Button } from "./Start.styled";

const Start = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/main");
  };
  return (
    <Div>
      <Button fontSize="1.25rem" width="10rem" bgColor="white" fontColor="lightBlue600" onClick={navigateHome}>
        시작하기
      </Button>
      <Aquarium />
    </Div>
  );
};

export default Start;
