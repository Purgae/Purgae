import { ExtraLarge, Large, Medium, Small, ExtraSmall, Custom } from "./ProfileImage.styled";
import { ProfileImageProps } from "./ProfileImage.types";

const ProfileImage = ({
  size,
  url = "public/profile.png",
  width = "5.5rem",
  ...props
}: React.PropsWithChildren<ProfileImageProps>) => {
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

  return <Custom url={url} width={width}></Custom>;
};

export default ProfileImage;
