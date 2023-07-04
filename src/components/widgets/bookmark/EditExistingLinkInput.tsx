import React, {
  KeyboardEvent,
  SetStateAction,
  useContext,
  useState,
} from "react";
import {
  foldersContext,
  FoldersContextTypes,
} from "../../../contexts/bookmarkContext";
import { ensureUrlProtocol } from "../../../helpers/links";

interface EditExistingLinkInputPropsType {
  link: string;
  index: number;
  setIsEditModeOn: React.Dispatch<SetStateAction<boolean>>;
}

const EditExistingLinkInput: React.FC<EditExistingLinkInputPropsType> = ({
  link,
  index,
  setIsEditModeOn,
}) => {
  const { setFolders } = useContext(foldersContext) as FoldersContextTypes;
  const [inputValue, setInputValue] = useState<string>(
    link ? ensureUrlProtocol(link.toLowerCase()) : ""
  );

  //
  function handleAddingALink(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter" && inputValue.length > 0) {
      // validate URL using regx
      const pattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/.*)?$/i;

      // if the URL is valid
      // Update the corresponding folder with the new link
      // if isEditModeOn is true, then update the corresponding link
      if (pattern.test(inputValue)) {
        setFolders((prevFoldersState) => {
          return prevFoldersState.map((folder) => {
            if (folder.opened) {
              return {
                ...folder,
                links: folder.links.map((link, linkIndex) => {
                  if (linkIndex === index) {
                    return ensureUrlProtocol(inputValue.toLocaleLowerCase());
                  }
                  return link;
                }),
              };
            }

            return folder;
          });
        });
      }

      setIsEditModeOn(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <div className="tw-mt-2">
      <input
        type="text"
        placeholder="Paste a link and click enter"
        className="tw-rounded-[7px] [border:0.5px_solid_rgba(255,_255,_255,_0.20)] tw-bg-[rgba(18,_18,_18,0.30)] tw-py-[11px] tw-pl-[14px] tw-w-full tw-text-[rgba(255,_255,_255,_0.30)] tw-text-[13px] placeholder:tw-text-[rgba(255,_255,_255,_0.30)] tw-text-xs"
        onKeyDown={handleAddingALink}
        onChange={handleChange}
        value={inputValue}
      />
    </div>
  );
};

export default EditExistingLinkInput;
