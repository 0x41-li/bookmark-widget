import React, { createContext } from "react";

export interface FoldersContextTypes {
  folders: Array<{
    folderName: string;
    links: string[];
    opened: boolean;
  }>;
  setFolders: React.Dispatch<
    React.SetStateAction<
      Array<{
        folderName: string;
        links: Array<string>;
        opened: boolean;
      }>
    >
  >;
}

export const foldersContext = createContext<FoldersContextTypes | null>(null);


