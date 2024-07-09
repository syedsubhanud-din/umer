'use client';
import React, { createContext, useState, useContext } from 'react';

interface ActiveLinkContextProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
}

const ActiveLinkContext = createContext<ActiveLinkContextProps | undefined>(undefined);

export const useActiveLink = () => {
  const context = useContext(ActiveLinkContext);
  if (!context) {
    throw new Error('useActiveLink must be used within an ActiveLinkProvider');
  }
  return context;
};

export const ActiveLinkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeLink, setActiveLink] = useState('/');

  return (
    <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};
