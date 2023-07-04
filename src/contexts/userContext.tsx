import React, { SetStateAction, createContext } from "react";

export interface userContextTypes {
  user: {
    type: string;
  };
  setUser: React.Dispatch<SetStateAction<{ type: string }>>;
}

export const userContext = createContext<userContextTypes | null>(null);
