import { useEffect, useState } from "react";
import { ethers, BigNumber } from "ethers";
import Token from "../../contracts/Token.json";
import { proof, isIncludes, whiteList } from "./data";

const addressForTest = "0xD1C67e2db9513f60b0FD7CDDe2B8542D3B7fA7fD";

const MainMit = ({ accounts }) => {
  console.log("accounts",accounts)
  const [flag, setFlag] = useState(false);
  const [value, setValue] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        addressForTest, // 合约地址
        Token.abi,
        signer
      );
      try {
        if (flag) {
          return;
        }
        setFlag(true);

        const name = await contract.name();
        setFlag(false);
        console.log(name, "name");
      } catch (err) {
        console.log("error", err);
        setFlag(false);
      }
    }
  }

  async function handleMintGuest(money=0.08) {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        addressForTest, // 合约地址
        Token.abi,
        signer
      );
      try {
        if (flag) {
          return;
        }
        setFlag(true);
        const response = await contract.mintGuest(BigNumber.from(value), {
          value: ethers.utils.parseEther((money * value).toString()),
        });
        window.alert("success!");
        setFlag(false);
        console.log("response", response);
      } catch (err) {
        setFlag(false);
        console.log("error", err);
        window.alert("fail!");
      }
    }
  }
  async function handleMintWhiteList() {
    handleMintGuest(0.1)
  }

  // -
  const handlerDecrement = () => {
    if (value - 1 === 0) {
      console.log(value, "value");
      return;
    }
    setValue((pre) => pre - 1);
  };
  // +
  const handlerIncrement = () => {
    if (value + 1 === 6) {
      console.log(value, "value");
      return;
    }
    setValue((pre) => pre + 1);
  };

  return {
    handleMint,
    handlerDecrement,
    handlerIncrement,
    isConnected,
    flag,
    handleMintGuest,
    handleMintWhiteList,
    isWhiteList:isIncludes(accounts[0]),
    value,
  };
};

export default MainMit;
