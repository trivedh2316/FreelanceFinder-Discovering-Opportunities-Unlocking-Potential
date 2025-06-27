import React, { createContext, useEffect, useState } from 'react';

export const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null);
  const [usertype, setUsertype] = useState(localStorage.getItem('usertype') || null);

  const login = (id, role) => {
    localStorage.setItem('userId', id);
    localStorage.setItem('usertype', role);
    setUserId(id);
    setUsertype(role);
  };

  const logout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('usertype');
    setUserId(null);
    setUsertype(null);
  };

  useEffect(() => {
    setUserId(localStorage.getItem('userId'));
    setUsertype(localStorage.getItem('usertype'));
  }, []);

  return (
    <GeneralContext.Provider value={{ userId, usertype, login, logout }}>
      {children}
    </GeneralContext.Provider>
  );
};
