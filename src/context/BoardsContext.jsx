import React, { useState, useEffect } from "react";
import { getBoards } from "../data/local-storage/boards";

export const BoardsContext = React.createContext({});

function BoardsContextProvider({ children }) {
  const [boards, setBoards] = useState([]);
  const [reloadCounter, setReloadCounter] = useState(0);
  useEffect(() => {
    setBoards(getBoards());
  }, [reloadCounter]);

  const reloadBoards = () => {
    setReloadCounter((prev) => 1 + prev);
  };

  return (
    <BoardsContext.Provider value={{ boards, setBoards, reloadBoards }}>
      {children}
    </BoardsContext.Provider>
  );
}

export default BoardsContextProvider;
