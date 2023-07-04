import React, { SetStateAction, useContext } from "react";
import { userContext, userContextTypes } from "../../../contexts/userContext";

interface AddNewFolderButtonPropsType {
  setIsAddNewFolderInputVisible: React.Dispatch<SetStateAction<boolean>>;
}

const AddNewFolderButton: React.FC<AddNewFolderButtonPropsType> = ({
  setIsAddNewFolderInputVisible,
}) => {
  const { user } = useContext(userContext) as userContextTypes;

  const handleClick = () => {
    if (user.type === "PREMIUM") {
      setIsAddNewFolderInputVisible((prevState) => !prevState);
    }
  };
  return (
    <button
      onClick={handleClick}
      className="tw-flex tw-w-full tw-gap-[7px] tw-pt-[8px] tw-pb-[10px] tw-items-center tw-justify-center tw-text-[rgba(255,_255,_255,_0.50)] [border:0.55px_solid_rgba(255,_255,_255,_0.10)]"
    >
      {user.type === "FREE" || user.type === "UNREGISTERED" ? (
        <svg
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.33366 5.66667V4.33333C9.33366 2.49238 7.84127 1 6.00033 1C4.15938 1 2.66699 2.49238 2.66699 4.33333V5.66667M6.00033 8.66667V10M3.86699 13H8.13366C9.25376 13 9.81382 13 10.2416 12.782C10.618 12.5903 10.9239 12.2843 11.1157 11.908C11.3337 11.4802 11.3337 10.9201 11.3337 9.8V8.86667C11.3337 7.74656 11.3337 7.18651 11.1157 6.75869C10.9239 6.38236 10.618 6.0764 10.2416 5.88465C9.81382 5.66667 9.25376 5.66667 8.13366 5.66667H3.86699C2.74689 5.66667 2.18683 5.66667 1.75901 5.88465C1.38269 6.0764 1.07673 6.38236 0.884979 6.75869C0.666992 7.18651 0.666992 7.74656 0.666992 8.86667V9.8C0.666992 10.9201 0.666992 11.4802 0.884979 11.908C1.07673 12.2843 1.38269 12.5903 1.75901 12.782C2.18683 13 2.74689 13 3.86699 13Z"
            stroke="white"
            strokeOpacity="0.5"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <div className="">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1V13M1 7H13"
              stroke="white"
              strokeOpacity="0.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
      New folder
    </button>
  );
};

export default AddNewFolderButton;
