import React, { useState } from "react";
import FoldersList from "./FoldersList";
import AddNewFolderButton from "./AddNewFolderButton";
import AddNewFolderInput from "./AddNewFolderInput";

const FoldersModal: React.FC = () => {
  const [isAddNewFolderInputVisible, setIsAddNewFolderInputVisible] =
    useState(false);

  return (
    <div className="tw-absolute tw-top-[38px] tw-right-[26px] [border:0.55px_solid_rgba(255,_255,_255,_0.10) tw-bg-[rgba(18,_18,_18,_0.75)] tw-shadow-[0px_4px_8px_0px_rgba(0,_0,_0,_0.15)] tw-backdrop-blur-[20px] tw-w-[212px] tw-rounded-md tw-overflow-hidden tw-z-50">
      <div className="tw-py-[7px] tw-text-[rgba(255,_255,_255,_0.70)] tw-text-[13px] tw-text-center [border-bottom:0.55px_solid_rgba(255,_255,_255,_0.10)] tw-font-bold">
        FOLDERS
      </div>

      <FoldersList />

      {isAddNewFolderInputVisible && <AddNewFolderInput />}

      <AddNewFolderButton
        setIsAddNewFolderInputVisible={setIsAddNewFolderInputVisible}
      />
    </div>
  );
};

export default FoldersModal;
