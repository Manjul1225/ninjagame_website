// DataContext.js

import React, { createContext, useState } from 'react';

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(null);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);

  return (
    <DataContext.Provider value={{ isLoggedIn, setLoggedIn, setToken, token, username, setUsername }}>
      {children}
    </DataContext.Provider>
  );
};