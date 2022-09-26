import { useEffect, useState } from "react";
import { Div } from "./ProfileAquarium.styled";

import useFetchNFT from "@/hooks/useFetchNFT";
import Aquarium from "@/common/Aquarium/Aquarium";

const Start = () => {
  const [loading, setLoading] = useState(true);
  const [fishImages, setFishImages] = useState<string[]>([]);
  const { fetchMyNFT } = useFetchNFT();

  const fetchNFTList = async () => {
    const myNFTList = await fetchMyNFT("0x8B80F8d86a337b45D9a717D4CC8048c58fe2a69b");
    setFishImages(myNFTList);
    setLoading(false);
  };

  useEffect(() => {
    fetchNFTList();
  }, []);

  return (
    <>
      {" "}
      {loading ? (
        <div>로딩중...</div>
      ) : (
        <Div>
          <Aquarium fishImages={fishImages} />
        </Div>
      )}
    </>
  );
};

export default Start;
