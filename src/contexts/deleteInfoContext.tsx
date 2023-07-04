import React, { SetStateAction, createContext } from "react";

export interface DeleteInfoContextTypes {
  deleteModalVisible: boolean;
  deleteInfo: {
    index: number;
    type: string;
  };
  setDeleteInfo: React.Dispatch<
    SetStateAction<{ index: number; type: string }>
  >;
  setDeleteModalVisible: React.Dispatch<SetStateAction<boolean>>;
}

export const deleteInfoContext = createContext<DeleteInfoContextTypes | null>(
  null
);
