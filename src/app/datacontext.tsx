// DataContext.js

import React, { createContext, useState } from 'react';

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(null);
  const [token, setEntityToken] = useState(null);

  return (
    <DataContext.Provider value={{ isLoggedIn, setLoggedIn, setEntityToken, token }}>
      {children}
    </DataContext.Provider>
  );
};