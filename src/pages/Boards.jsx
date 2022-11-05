import React, { useEffect, useState, useContext } from "react";
import { Navigate, useParams } from "react-router-dom";

import BoardContainer from "../components/BoardContainer";
import { BoardsContext } from "../context/BoardsContext";

function Boards({ currentBoardNameHandler, showSideBarHandler }) {
  const { boards } = useContext(BoardsContext);
  const { boardName } = useParams();
  const [board, setBoard] = useState(
    boards.find((board) => board.title === boardName)
  );
  useEffect(() => {
    currentBoardNameHandler(boardName);
    setBoard(() => boards.find((board) => board.title === boardName));
  }, [boardName, boards]);
  return (
    <main className="h-[calc(100vh-50px)]">
      {(board && <BoardContainer boardTasks={board.columns} />) || (
        <Navigate to="/" />
      )}
    </main>
  );
}

export default Boards;
