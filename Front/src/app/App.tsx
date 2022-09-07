import Home from "@/components/home/Home";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  //todo. 실행시, 크립토좀비 참고
  // - metamask검사
  const [account, setAccount] = useState ("");

  const getAccount = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // -> window.ethereum.request 찍어보기

        setAccount(accounts[0]);
      } else {
        alert("Install Metamask!");
      }
    } catch (error) {
      console.error(error); 
    }
  };

  useEffect(() => {
    getAccount(); 
  }, []);



  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </>
  );
}

export default App;
