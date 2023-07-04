import { useContext } from "react";
import {
  foldersContext,
  FoldersContextTypes,
} from "../../../contexts/bookmarkContext";
import FolderButton from "./FolderButton";

const FoldersList = () => {
  const { folders } = useContext(foldersContext) as FoldersContextTypes;

  return folders.map((folder, index) => {
    return <FolderButton folder={folder} index={index} key={index} />;
  });
};

export default FoldersList;
