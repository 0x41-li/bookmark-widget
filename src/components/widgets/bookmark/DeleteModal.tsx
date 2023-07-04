import React, {
  MouseEventHandler,
  SetStateAction,
  useContext,
} from "react";
import {
  foldersContext,
  FoldersContextTypes,
} from "../../../contexts/bookmarkContext";

interface DeleteModalPropsType {
  deleteInfo: { index: number; type: string };
  setDeleteModalVisible: React.Dispatch<SetStateAction<boolean>>;
}

const DeleteModal: React.FC<DeleteModalPropsType> = ({
  deleteInfo,
  setDeleteModalVisible,
}) => {
  const { setFolders } = useContext(foldersContext) as FoldersContextTypes;

  const handleDeleteClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (deleteInfo.type === "link") {
      setFolders((prevState) => {
        return prevState.map((folder) => {
          if (folder.opened) {
            if (folder.links.length === 1) {
              return { ...folder, links: [] };
            }
            return {
              ...folder,
              links: folder.links.filter(
                (_link, linkIndex) => deleteInfo.index !== linkIndex
              ),
            };
          }
          return folder;
        });
      });
    } else {
      setFolders((prevState) => {
        return prevState.filter((_folder, index) => index !== deleteInfo.index);
      });
    }

    setDeleteModalVisible(false);
  };

  const handleGoBackClick: MouseEventHandler<HTMLButtonElement> = () => {
    setDeleteModalVisible(false);
  };

  return (
    <div className="[border:0.7px_solid_rgba(255,_255,_255,_0.20)] tw-bg-[rgba(18,_18,_18,_0.60)] tw-shadow-[0px_5px_9px_0px_rgba(0,_0,_0,_0.25)] tw-backdrop-blur-[23px] tw-absolute tw-left-1/2 tw-top-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-w-[245px] tw-h-[166px] tw-p-[18px] tw-rounded-[18px] tw-overflow-hidden">
      <p className="tw-text-white tw-text-center tw-text-[18px] tw-font-medium tw-leading-[21px]">
        Are you sure you want to delete this {deleteInfo.type}?
      </p>
      <div className="tw-flex tw-flex-col tw-w-[155px] tw-mx-auto tw-mt-[28px]">
        <button
          onClick={handleDeleteClick}
          className="tw-bg-[#F3A952] tw-text-black tw-text-base tw-font-bold tw-py-[6px] tw-rounded-[9px] tw-leading-[19px]"
        >
          Delete
        </button>
        <button
          onClick={handleGoBackClick}
          className="tw-text-[rgba(255,_255,_255,_0.40)] tw-mt-[8px] tw-text-[12px]"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
