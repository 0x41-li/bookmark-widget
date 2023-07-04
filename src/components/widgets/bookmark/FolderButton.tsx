import React, { MouseEvent, useContext, useState } from "react";
import {
  foldersContext,
  FoldersContextTypes,
} from "../../../contexts/bookmarkContext";
import EditDeleteMenu from "./EditDeleteMenu";
import EditExistingFolderInput from "./EditExistingFolderInput";
import { userContext, userContextTypes } from "../../../contexts/userContext";

interface FolderButtonPropsType {
  folder: {
    folderName: string;
    links: string[];
    opened: boolean;
  };
  index: number;
}

const FolderButton: React.FC<FolderButtonPropsType> = ({ folder, index }) => {
  const [isFolderButtonHovered, setIsFolderButtonHovered] = useState(false);
  const [editDeleteMenuVisibility, setEditDeleteMenuVisibility] =
    useState(false);
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  const { user } = useContext(userContext) as userContextTypes;

  let formattedFolderName = folder.folderName;

  if (formattedFolderName.length > 20) {
    formattedFolderName = formattedFolderName.slice(0, 20) + "..";
  }

  const { setFolders } = useContext(foldersContext) as FoldersContextTypes;

  function handleClick() {
    setFolders((prevStateFolders) =>
      prevStateFolders.map((folder, folderIndex) => {
        if (index === folderIndex) {
          return { ...folder, opened: true };
        }
        return { ...folder, opened: false };
      })
    );
  }

  const handleHover = () => {
    setIsFolderButtonHovered((prevState) => !prevState);
    setEditDeleteMenuVisibility(false);
  };

  function handleMenuClick(e: MouseEvent) {
    e.stopPropagation();
    setEditDeleteMenuVisibility((prevState) => !prevState);
  }

  function handleEditClick(e: MouseEvent) {
    e.stopPropagation();
    setIsEditModeOn(true);
  }

  return (
    <div
      role="button"
      onClick={handleClick}
      className="tw-flex tw-w-full tw-text-left tw-my-[7px] tw-pl-[7px] tw-pr-[11px] tw-text-[rgba(255,_255,_255,_0.70)] tw-font-normal tw-text-[16px]"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {isEditModeOn ? (
        <EditExistingFolderInput
          folderName={folder.folderName}
          setIsEditModeOn={setIsEditModeOn}
        />
      ) : (
        <div className="tw-flex tw-w-full tw-justify-between tw-items-center">
          {formattedFolderName}

          {isFolderButtonHovered && (
            <div
              className="tw-relative tw-flex tw-items-center tw-justify-center"
              onClick={handleMenuClick}
            >
              {user.type === "FREE" || user.type === "UNREGISTERED" ? (
                <div onClick={handleEditClick} className="">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4398 0.560695C11.2621 0.382935 11.0511 0.241926 10.8188 0.145721C10.5866 0.0495162 10.3377 0 10.0863 0C9.83493 0 9.58602 0.0495162 9.35379 0.145721C9.12155 0.241926 8.91054 0.382935 8.73281 0.560695L1.33781 7.9567C1.15702 8.13761 1.02077 8.35808 0.939806 8.6007L0.0258059 11.3437C-0.00364357 11.4318 -0.00798204 11.5263 0.0132768 11.6167C0.0345356 11.7071 0.0805516 11.7898 0.146167 11.8555C0.211783 11.9212 0.294405 11.9674 0.384773 11.9888C0.475142 12.0102 0.569685 12.006 0.657806 11.9767L3.40081 11.0617C3.64381 10.9817 3.86381 10.8447 4.04481 10.6637L11.4398 3.2697C11.6176 3.09196 11.7586 2.88095 11.8548 2.64872C11.951 2.41648 12.0005 2.16757 12.0005 1.9162C12.0005 1.66482 11.951 1.41591 11.8548 1.18368C11.7586 0.95144 11.6176 0.74043 11.4398 0.562695V0.560695ZM9.43981 1.2687C9.5247 1.1838 9.6255 1.11645 9.73642 1.0705C9.84735 1.02455 9.96624 1.00091 10.0863 1.00091C10.2064 1.00091 10.3253 1.02455 10.4362 1.0705C10.5471 1.11645 10.6479 1.1838 10.7328 1.2687C10.8177 1.35359 10.8851 1.45439 10.931 1.56531C10.9769 1.67624 11.0006 1.79513 11.0006 1.9152C11.0006 2.03526 10.9769 2.15415 10.931 2.26508C10.8851 2.37601 10.8177 2.4768 10.7328 2.5617L9.99981 3.2947L8.70681 2.0017L9.44081 1.2687H9.43981ZM7.99981 2.7087L9.29181 4.0017L3.33781 9.9557C3.2668 10.027 3.18018 10.0807 3.08481 10.1127L1.29081 10.7107L1.88881 8.9167C1.92039 8.82107 1.9738 8.73411 2.04481 8.66269L7.99981 2.7087Z"
                      fill="white"
                      fillOpacity="0.5"
                    />
                  </svg>
                </div>
              ) : (
                <svg
                  width="17"
                  height="7"
                  viewBox="0 0 17 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="7"
                    height="17"
                    rx="2"
                    transform="matrix(0 -1 -1 0 17 7)"
                    fill="white"
                    fillOpacity="0.1"
                  />
                  <circle
                    cx="1.5"
                    cy="1.5"
                    r="1.5"
                    transform="matrix(0 -1 -1 0 15 5)"
                    fill="#BEBEBE"
                  />
                  <circle
                    cx="1.5"
                    cy="1.5"
                    r="1.5"
                    transform="matrix(0 -1 -1 0 10 5)"
                    fill="#BEBEBE"
                  />
                  <circle
                    cx="1.5"
                    cy="1.5"
                    r="1.5"
                    transform="matrix(0 -1 -1 0 5 5)"
                    fill="#BEBEBE"
                  />
                </svg>
              )}

              {editDeleteMenuVisibility && (
                <EditDeleteMenu
                  index={index}
                  setIsEditModeOn={setIsEditModeOn}
                  type="folder"
                />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FolderButton;
