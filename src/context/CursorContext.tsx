"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface CursorContextType {
  hovered: boolean;
  setHovered: (state: boolean) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <CursorContext.Provider value={{ hovered, setHovered }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
