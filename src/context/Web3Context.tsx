import React, { createContext, useContext, useEffect, useState } from "react";
import Web3 from "web3";
import { magic } from "../libs/magic";

type Web3ContextType = {
  web3: Web3 | null;
  initializeWeb3: () => void;
};

const Web3Context = createContext<Web3ContextType>({
  web3: null,
  initializeWeb3: () => {},
});

export const useWeb3 = () => useContext(Web3Context);

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const [web3, setWeb3] = useState<Web3 | null>(null);

  const initializeWeb3 = async () => {
    const provider = await magic.wallet.getProvider();
    const web3 = new Web3(provider);
    setWeb3(web3);
  };

  useEffect(() => {
    initializeWeb3();
  }, []);

  return (
    <Web3Context.Provider
      value={{
        web3,
        initializeWeb3,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
