import useEtherToTrash from "./useEtherToTrash";

const useWeiToTrash = () => {
  const { changeEtherToTrash } = useEtherToTrash();

  const changeWeiToTrash = (wei: number) => {
    const myEth = wei / 10 ** 18;
    const data = changeEtherToTrash(myEth);
    return data;
  };

  return { changeWeiToTrash };
};

export default useWeiToTrash;
