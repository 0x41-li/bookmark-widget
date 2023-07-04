import React, {
  MouseEvent,
  MouseEventHandler,
  SetStateAction,
  useContext,
} from "react";

import {
  DeleteInfoContextTypes,
  deleteInfoContext,
} from "../../../contexts/deleteInfoContext";
import {
  folderModalContextTypes,
  foldersModalContext,
} from "../../../contexts/foldersModalContext";

interface EditDeleteMenuPropsTypes {
  index: number;
  setIsEditModeOn: React.Dispatch<SetStateAction<boolean>>;
  type: string;
}

const EditDeleteMenu: React.FC<EditDeleteMenuPropsTypes> = ({
  index,
  setIsEditModeOn,
  type,
}) => {
  const { setIsFoldersModalVisible } = useContext(
    foldersModalContext
  ) as folderModalContextTypes;

  const { setDeleteModalVisible } = useContext(
    deleteInfoContext
  ) as DeleteInfoContextTypes;

  const { setDeleteInfo } = useContext(
    deleteInfoContext
  ) as DeleteInfoContextTypes;

  const handleDeleteClick: MouseEventHandler<HTMLButtonElement> = (
    e: MouseEvent
  ) => {
    e.stopPropagation();

    setDeleteInfo({ index: index, type: type });

    setDeleteModalVisible((prevState) => !prevState);
    setIsFoldersModalVisible(false);
  };

  const handleEditClick: MouseEventHandler<HTMLButtonElement> = (
    e: MouseEvent
  ) => {
    e.stopPropagation();

    setIsEditModeOn(true);
  };

  return (
    <div className="tw-absolute tw-right-[22px] tw-top-0 tw-p-[5px_5px_7px_3px] tw-bg-[rgba(18,_18,_18,_0.30)] tw-shadow-[0px_4px_8px_0px_rgba(0,_0,_0,_0.15)] tw-filter-[20px] tw-flex-col tw-w-[79px] tw-h-[61px] [border:0.55px_solid_rgba(255,_255,_255,_0.10)] tw-rounded-[6px] tw-flex">
      <button
        onClick={handleEditClick}
        className="tw-text-white tw-font-medium tw-text-sm tw-text-left tw-p-[5px] tw-leading-[16px]"
      >
        Edit
      </button>
      <button
        onClick={handleDeleteClick}
        className="tw-text-white tw-font-medium tw-text-sm tw-text-left tw-p-[5px] tw-leading-[16px]"
      >
        Delete
      </button>
    </div>
  );
};

export default EditDeleteMenu;
