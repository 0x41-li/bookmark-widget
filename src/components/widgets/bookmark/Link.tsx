import React, { MouseEvent, useEffect, useState } from "react";
import {
  doesFaviconExist,
  ensureUrlProtocol,
  extractCompanyNameFromURL,
} from "../../../helpers/links";
import { openNewTab } from "../../../helpers/browser";
import EditDeleteMenu from "./EditDeleteMenu";
import EditExistingLinkInput from "./EditExistingLinkInput";

interface LinkProps {
  link: string;
  index: number;
}

const Link: React.FC<LinkProps> = ({ link, index }) => {
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  const [faviconExist, setFaviconExist] = useState(false);
  const [hoveredOverALink, setHoveredOverALink] = useState(false);
  const [editDeleteMenuVisibility, setEditDeleteMenuVisibility] =
    useState(false);

  const safeLink = ensureUrlProtocol(link);
  let formattedLink = safeLink.toLowerCase();

  // Adding three dots after the 20 first characters if the link displayed is too long
  if (formattedLink.length > 20) {
    formattedLink = formattedLink.slice(0, 20) + "...";
  }

  const companyName = extractCompanyNameFromURL(link);

  useEffect(() => {
    // Check if the favicon exist by sending a /favicon.ico request
    doesFaviconExist(safeLink).then((exist) => {
      setFaviconExist(exist);
    });
  }, []);

  function handleMenuClick(e: MouseEvent) {
    e.stopPropagation();
    setEditDeleteMenuVisibility((prevState) => !prevState);
  }

  if (isEditModeOn) {
    return (
      <EditExistingLinkInput
        link={link}
        index={index}
        setIsEditModeOn={setIsEditModeOn}
      />
    );
  }

  return (
    <div
      className="tw-cursor-pointer"
      onMouseEnter={() => setHoveredOverALink(true)}
      onMouseLeave={() => {
        setHoveredOverALink(false);
        setEditDeleteMenuVisibility(false);
      }}
      onClick={() => openNewTab(formattedLink)}
    >
      <div className="tw-rounded-[7px] tw-py-[10px] tw-pl-[14px] tw-pr-[18px] tw-bg-[rgba(18,_18,_18,_0.30)] tw-mt-[9px] tw-flex tw-justify-between">
        <div className="tw-flex tw-items-center tw-gap-[6px]">
          <div className="tw-w-[14px]">
            {faviconExist ? (
              <img src={`${safeLink}/favicon.ico`} alt="" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
              </svg>
            )}
          </div>

          <p className="tw-text-[rgba(255,_255,_255,_0.70)]">{companyName}</p>
        </div>

        <div
          className={`tw-flex tw-items-center ${
            hoveredOverALink ? "tw-hidden" : ""
          }`}
        >
          <p className="tw-text-[rgba(255,_255,_255,_0.30)] tw-text-[13px] [line-height:15px]">
            {formattedLink}
          </p>
        </div>

        <div
          className={`tw-relative tw-flex tw-items-center tw-justify-center ${
            !hoveredOverALink ? "tw-hidden" : ""
          }`}
          onClick={handleMenuClick}
        >
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

          {editDeleteMenuVisibility && (
            <EditDeleteMenu
              index={index}
              setIsEditModeOn={setIsEditModeOn}
              type="link"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Link;
