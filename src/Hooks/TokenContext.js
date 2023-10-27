import React, { createContext, useContext, useState } from 'react';

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [tokens, setTokens] = useState({ accessToken: null, refreshToken: null });

  const setTokenData = (accessToken, refreshToken) => {
    setTokens({ accessToken, refreshToken });
  };

  return <TokenContext.Provider value={{ tokens, setTokenData }}>{children}</TokenContext.Provider>;
};

export const useToken = () => {
  return useContext(TokenContext);
};
