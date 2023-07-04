import React, {
  KeyboardEvent,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  foldersContext,
  FoldersContextTypes,
} from "../../../contexts/bookmarkContext";

interface AddNewFolderInputPropsType {
  setIsAddNewFolderInputVisible: React.Dispatch<SetStateAction<boolean>>;
}

const AddNewFolderInput: React.FC<AddNewFolderInputPropsType> = ({
  setIsAddNewFolderInputVisible,
}) => {
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { setFolders } = useContext(foldersContext) as FoldersContextTypes;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputVal(e.target.value);
  }

  function handleEnterPressed(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter" && inputVal.length > 0) {
      setFolders((prevStateFolders) => [
        ...prevStateFolders,
        { folderName: inputVal, links: [], opened: false },
      ]);

      setInputVal("");
      setIsAddNewFolderInputVisible(false);
    }
  }

  return (
    <input
      ref={inputRef}
      className="tw-text-[rgba(255,_255,_255,_0.30)] tw-bg-transparent tw-text-base tw-pl-[8px] focus-visible:[outline:none] tw-mb-[7px]"
      type="text"
      placeholder="Write folder name"
      value={inputVal}
      onChange={handleInputChange}
      onKeyDown={handleEnterPressed}
    />
  );
};

export default AddNewFolderInput;
