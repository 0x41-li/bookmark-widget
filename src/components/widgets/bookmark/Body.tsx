import { useContext, useState } from "react";
import LinksList from "./LinksList";
import {
  foldersContext,
  FoldersContextTypes,
} from "../../../contexts/bookmarkContext";
import AddNewLinkInput from "./AddNewLinkInput";

const Body = () => {
  const [showAddNewLinkInput, setShowAddNewLinkInput] = useState(false);
  const { folders } = useContext(foldersContext) as FoldersContextTypes;

  let currentOpenedFolder: {
    folderName: string;
    links: string[];
    opened: boolean;
  } = folders[0];

  folders.forEach((folder) => {
    if (folder.opened) {
      currentOpenedFolder = folder;
    }
  });

  return (
    <div className="tw-h-[342px] tw-mt-[9px] tw-px-[10px] tw-flex tw-flex-col tw-overflow-auto">
      <div className="tw-flex tw-justify-between tw-items-center">
        <p className="tw-text-[rgba(255,_255,_255,_0.40)] tw-font-semibold tw-text-sm [line-height:16px]">
          {currentOpenedFolder?.folderName}
        </p>

        <div onClick={() => setShowAddNewLinkInput((prev) => !prev)}>
          <svg
            width="19"
            height="12"
            viewBox="0 0 19 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.53846 3.69231H12.9231V5.53846H5.53846V3.69231ZM16.7077 4.61538H18.4615C18.4615 2.06769 16.3938 0 13.8462 0H10.1538V1.75385H13.8462C15.4246 1.75385 16.7077 3.03692 16.7077 4.61538ZM1.75385 4.61538C1.75385 3.03692 3.03692 1.75385 4.61538 1.75385H8.30769V0H4.61538C2.06769 0 0 2.06769 0 4.61538C0 7.16308 2.06769 9.23077 4.61538 9.23077H8.30769V7.47692H4.61538C3.03692 7.47692 1.75385 6.19385 1.75385 4.61538ZM15.6923 4.61538H13.8462V7.38462H11.0769V9.23077H13.8462V12H15.6923V9.23077H18.4615V7.38462H15.6923V4.61538Z"
              fill="white"
              fillOpacity="0.5"
            />
          </svg>
        </div>
      </div>

      <div
        className={`tw-grow ${
          !showAddNewLinkInput && currentOpenedFolder.links?.length === 0
            ? ""
            : "tw-hidden"
        }`}
      >
        <p className="tw-text-[rgba(255,_255,_255,_0.30)] tw-text-base tw-text-center tw-mt-[104px]">
          Bookmark your favorite links to quick-access them whenever you want.
        </p>
      </div>

      <LinksList links={currentOpenedFolder.links} />

      <AddNewLinkInput
        showAddNewLinkInput={showAddNewLinkInput}
        setShowAddNewLinkInput={setShowAddNewLinkInput}
      />
    </div>
  );
};

export default Body;
