import { useState } from "react";
import BookmarkWidget from "./components/widgets/bookmark/Index";
import { foldersContext } from "./contexts/bookmarkContext";
import { deleteInfoContext } from "./contexts/deleteInfoContext";
import { userContext } from "./contexts/userContext";
import { foldersModalContext } from "./contexts/foldersModalContext";

function App() {
  const [folders, setFolders] = useState([
    { folderName: "Favorites", links: ["www.Slack.com"], opened: true },
  ]);

  const [deleteInfo, setDeleteInfo] = useState({
    index: 0,
    type: "link",
  });

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [user, setUser] = useState<{ type: string }>({ type: "FREE" });

  const [isFoldersModalVisible, setIsFoldersModalVisible] = useState(false);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <foldersContext.Provider value={{ folders, setFolders }}>
        <deleteInfoContext.Provider
          value={{
            deleteModalVisible,
            deleteInfo,
            setDeleteInfo,
            setDeleteModalVisible,
          }}
        >
          <foldersModalContext.Provider
            value={{ isFoldersModalVisible, setIsFoldersModalVisible }}
          >
            <BookmarkWidget />
          </foldersModalContext.Provider>
        </deleteInfoContext.Provider>
      </foldersContext.Provider>
    </userContext.Provider>
  );
}

export default App;
