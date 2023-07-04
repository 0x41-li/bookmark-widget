import { RefObject, useContext, useEffect, useRef, useState } from "react";
import { makeDraggable } from "../../../helpers/elements";
import FoldersModal from "./FoldersModal";
import { userContext, userContextTypes } from "../../../contexts/userContext";
import NonRegisteredUsersModal from "./NonRegisteredUsersModal";
import {
  folderModalContextTypes,
  foldersModalContext,
} from "../../../contexts/foldersModalContext";

interface HeaderPropsTypes {
  bookmarkDivRef: RefObject<HTMLElement>;
}

const Header: React.FC<HeaderPropsTypes> = (props) => {
  const { isFoldersModalVisible, setIsFoldersModalVisible } = useContext(
    foldersModalContext
  ) as folderModalContextTypes;
  const { bookmarkDivRef } = props;
  const bookmarkHeaderRef = useRef<HTMLDivElement>(null);
  const { user } = useContext(userContext) as userContextTypes;
  const [isWarningModalVisible, setIsWarningModalVisible] = useState(false);

  useEffect(() => {
    if (bookmarkHeaderRef.current !== null && bookmarkDivRef.current !== null) {
      makeDraggable(bookmarkDivRef.current, bookmarkHeaderRef.current);
    }
  }, [bookmarkHeaderRef, bookmarkDivRef]);

  function handleFolderIconClick() {
    setIsFoldersModalVisible((prevState) => !prevState);
    setIsWarningModalVisible(false);
  }

  function handleWarningMouseEnter() {
    setIsWarningModalVisible((prevState) => !prevState);
    setIsFoldersModalVisible(false);
  }

  return (
    <div
      ref={bookmarkHeaderRef}
      className="tw-relative [border-bottom:0.5px_solid_rgba(255,_255,_255,_0.20)] tw-bg-[rgba(18,_18,_18,_0.42)] tw-h-[46px] tw-rounded-t-[14px]"
    >
      <div className="tw-absolute tw-top-[18px] tw-right-[17px]">
        <svg
          width="16"
          height="2"
          viewBox="0 0 16 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1"
            y1="1"
            x2="15"
            y2="1"
            stroke="#898989"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="tw-flex tw-justify-center tw-items-center tw-py-[14px] tw-gap-[8px]">
        <p className="tw-text-[rgba(255,_255,_255,_0.70)] tw-font-medium [line-height:19px]">
          Links
        </p>

        <div onClick={handleFolderIconClick} className="tw-cursor-pointer">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.66634 4.16667L7.92265 2.67928C7.70861 2.2512 7.60158 2.03715 7.44192 1.88078C7.30073 1.74249 7.13056 1.63732 6.94372 1.57287C6.73245 1.5 6.49315 1.5 6.01453 1.5H3.46634C2.7196 1.5 2.34624 1.5 2.06102 1.64532C1.81014 1.77316 1.60616 1.97713 1.47833 2.22801C1.33301 2.51323 1.33301 2.8866 1.33301 3.63333V4.16667M1.33301 4.16667H11.4663C12.5864 4.16667 13.1465 4.16667 13.5743 4.38465C13.9506 4.5764 14.2566 4.88236 14.4484 5.25869C14.6663 5.68651 14.6663 6.24656 14.6663 7.36667V10.3C14.6663 11.4201 14.6663 11.9802 14.4484 12.408C14.2566 12.7843 13.9506 13.0903 13.5743 13.282C13.1465 13.5 12.5864 13.5 11.4663 13.5H4.53301C3.4129 13.5 2.85285 13.5 2.42503 13.282C2.0487 13.0903 1.74274 12.7843 1.55099 12.408C1.33301 11.9802 1.33301 11.4201 1.33301 10.3V4.16667Z"
              stroke="white"
              strokeOpacity="0.7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {user.type === "UNREGISTERED" && (
          <div
            onClick={handleWarningMouseEnter}
            className="tw-relative tw-cursor-pointer"
          >
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.3335 5.1V7.5M7.3335 9.9H7.3395M13.3335 7.5C13.3335 10.8137 10.6472 13.5 7.3335 13.5C4.01979 13.5 1.3335 10.8137 1.3335 7.5C1.3335 4.18629 4.01979 1.5 7.3335 1.5C10.6472 1.5 13.3335 4.18629 13.3335 7.5Z"
                stroke="white"
                strokeOpacity="0.7"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {isWarningModalVisible && <NonRegisteredUsersModal />}
          </div>
        )}

        {isFoldersModalVisible && <FoldersModal />}
      </div>
    </div>
  );
};

export default Header;
