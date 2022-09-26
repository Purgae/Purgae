import { FlexDiv } from "@/common/Common.styled";

import {} from "./FollowList.styled";
import FollowItem from "./FollowItem/MyFollowItem";

interface Props {
  status: boolean;
}

const FollowList = (props: Props) => {
  if (props.status) {
    return <FollowItem />;
  } else {
    return <FlexDiv>false</FlexDiv>;
  }
};

export default FollowList;
