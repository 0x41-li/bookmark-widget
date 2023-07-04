const NonRegisteredUsersModal = () => {
  return (
    <div className="tw-absolute tw-left-1/2 tw-top-[28px] -tw-translate-x-1/2 tw-w-[278px] tw-h-[70px] tw-bg-[#232323] tw-text-[12px] tw-font-normal tw-leading-[14px] tw-py-[7px] tw-px-[10px] tw-shadow-[0px_4px_8px_0px_rgba(0,_0,_0,_0.25)] tw-rounded-[7px]">
      <div className="tw-absolute tw-top-[-8px] tw-left-1/2 -tw-translate-x-1/2">
        <svg
          width="14"
          height="11"
          viewBox="0 0 14 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.85331 0.5894C6.37274 -0.196467 7.62688 -0.196467 8.14632 0.5894L13.8073 9.16044C14.3421 9.96999 13.7004 11 12.6608 11H1.33882C0.299944 11 -0.341832 9.96999 0.192313 9.16044L5.85331 0.5894V0.5894Z"
            fill="#232323"
          />
        </svg>
      </div>
      <p className="tw-text-center tw-text-white">
        You are using Links without an account. Saved links may be lost or not
        accessible from different devices. Register a free account to safely
        store them.
      </p>
    </div>
  );
};

export default NonRegisteredUsersModal;
