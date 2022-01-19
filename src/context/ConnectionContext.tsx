import React, { useState } from "react";
import { ethers } from "ethers";

export const ConnectionContext = React.createContext({});

const { ethereum }: any = window;
const provider = new ethers.providers.Web3Provider(ethereum);
// const signer = provider.getSigner();

export const ConnectionProvider = ({ children }: any) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");
  const [currentChainId, setCurrentChainId] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      setIsLoading(true);
      //find Account Id
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      setCurrentAccount(accounts[0]);

      //find Balance
      const balance = await provider.getBalance(accounts[0]);
      console.log(balance);
      setCurrentBalance(ethers.utils.formatEther(balance));

      //find chain-Id
      const chainId = await ethereum.request({
        method: "eth_chainId",
        params: [],
      });
      console.log(chainId);
      setCurrentChainId(parseInt(chainId, 16));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      throw new Error("No ethereum object");
    }
  };

  const disConnectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      await ethereum.request({
        method: "eth_requestAccounts",
        params: [{ eth_accounts: {} }],
      });

      setCurrentAccount("");
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  return (
    <ConnectionContext.Provider
      value={{
        connectWallet,
        disConnectWallet,
        currentAccount,
        currentBalance,
        currentChainId,
        isLoading,
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
};
