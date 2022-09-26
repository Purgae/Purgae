import { ExtraLarge, Large, Medium, Small, ExtraSmall, NavBar, Custom } from "./ProfileImage.styled";
import { ProfileImageProps } from "./ProfileImage.types";
import imgUrl from "/assets/profile.png";

const ProfileImage = ({
  size,
  url = imgUrl,
  width = "5.5rem",
  ...props
}: React.PropsWithChildren<ProfileImageProps>) => {
  if (url === null) {
    url = imgUrl;
  }
  if (size === "extraLarge") {
    return <ExtraLarge url={url}></ExtraLarge>;
  }
  if (size === "large") {
    return <Large url={url}></Large>;
  }
  if (size === "medium") {
    return <Medium url={url}></Medium>;
  }
  if (size === "small") {
    return <Small url={url}></Small>;
  }
  if (size === "extraSmall") {
    return <ExtraSmall url={url}></ExtraSmall>;
  }
  if (size === "navBar") {
    return <NavBar url={url}></NavBar>;
  }

  return <Custom url={url} width={width}></Custom>;
};

export default ProfileImage;
