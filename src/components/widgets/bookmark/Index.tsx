import Header from "./Header";
import Body from "./Body";
import { useContext, useRef } from "react";
import DeleteModal from "./DeleteModal";
import {
  DeleteInfoContextTypes,
  deleteInfoContext,
} from "../../../contexts/deleteInfoContext";

const Index = () => {
  const bookmarkDivRef = useRef<HTMLDivElement>(null);
  const { deleteInfo, deleteModalVisible, setDeleteModalVisible } = useContext(
    deleteInfoContext
  ) as DeleteInfoContextTypes;
  return (
    <div
      ref={bookmarkDivRef}
      className="tw-w-[320px] tw-rounded-[14px] [border:0.5px_solid_rgba(255,_255,_255,_0.20)] tw-bg-[rgba(18,_18,_18,_0.75)] tw-shadow-[0px_3.4px_6.8px_0px_rgba(0,_0,_0,0.25)] tw-backdrop-blur-[12.9px] tw-absolute tw-top-1/2 tw-left-1/2"
    >
      <Header bookmarkDivRef={bookmarkDivRef} />
      <Body />

      {deleteModalVisible && (
        <DeleteModal
          deleteInfo={deleteInfo}
          setDeleteModalVisible={setDeleteModalVisible}
        />
      )}
    </div>
  );
};

export default Index;
