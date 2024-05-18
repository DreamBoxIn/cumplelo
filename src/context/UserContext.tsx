import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useWeb3 } from "./Web3Context";

type UserContextType = {
  user: string | null;
};

const UserContext = createContext<UserContextType>({
  user: null,
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { web3 } = useWeb3();
  const [user, setUser] = useState<string | null>(null);

  const fetchUserAccount = useCallback(async () => {
    const accounts = await web3?.eth.getAccounts();
    setUser(accounts ? accounts[0] : null);
  }, [web3]);

  useEffect(() => {
    fetchUserAccount();
  }, [fetchUserAccount]);

  return (
    <UserContext.Provider
      value={{
        user: user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
