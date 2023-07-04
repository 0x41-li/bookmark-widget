import React, { SetStateAction, createContext } from "react";

export interface folderModalContextTypes {
  isFoldersModalVisible: boolean;
  setIsFoldersModalVisible: React.Dispatch<SetStateAction<boolean>>;
}

export const foldersModalContext =
  createContext<folderModalContextTypes | null>(null);
