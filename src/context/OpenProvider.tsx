import React, { createContext, useContext, useState } from "react";

interface OpenContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OpenContext = createContext<OpenContextProps | undefined>(undefined);

export const useOpenContext = (): OpenContextProps => {
  const context = useContext(OpenContext);
  if (!context) {
    throw new Error("useOpenContext must be used within a OpenProvider");
  }
  return context;
};

interface OpenProviderProps {
  children: React.ReactNode;
}

export const OpenProvider: React.FC<OpenProviderProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <OpenContext.Provider value={{ open, setOpen }}>
      {children}
    </OpenContext.Provider>
  );
};
