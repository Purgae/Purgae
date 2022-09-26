import { useEffect, useState } from "react";
import { Div } from "./ProfileAquarium.styled";

import useFetchNFT from "@/hooks/useFetchNFT";
import Aquarium from "@/common/Aquarium/Aquarium";
import { TEST_WALLET_ADDRESS } from "@/utils/smart-contract/MetaEnv";

const ProfileAquarium = () => {
  const [loading, setLoading] = useState(true);
  const [fishImages, setFishImages] = useState<string[]>([]);
  const { fetchMyNFT } = useFetchNFT();

  const fetchNFTList = async () => {
    const myNFTList = await fetchMyNFT(TEST_WALLET_ADDRESS);
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

export default ProfileAquarium;
