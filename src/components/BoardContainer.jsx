import React, { useState, useContext } from "react";
import TaskList from "./TaskList";
import AddColumnModal from "./AddColumnModal";
import { DragDropContext } from "react-beautiful-dnd";
import {
  moveTaskToXYPosition,
  moveTaskToYPosition,
} from "../utility/board-manipulate";
import { BoardsContext } from "../context/BoardsContext";
import { updateColumnsOfBoard } from "../data/local-storage/boards";

function BoardContainer({ boardId, boardTasks, showSideBar }) {
  const { setBoards } = useContext(BoardsContext);
  // const data = arrayOfObjectsFromMap(groupBy(boardTasks.tasks, "status"));
  console.log("data", boardTasks);

  const [showAddNewColumnModal, setShowAddNewColumnModal] = useState(false);
  const handleAddNewColumn = () => {
    // show add new column modal
    setShowAddNewColumnModal(true);
  };
  const handleOnDragEnd = (result) => {
    if (!result.source || !result.destination) return;
    const { source, destination } = result;
    const { index: taskIndexSrc, droppableId: columnIndexSrc } = source;
    const { index: taskIndexDist, droppableId: columnIndexDist } = destination;
    let newBoardTasks;
    if (columnIndexDist !== columnIndexSrc) {
      newBoardTasks = moveTaskToXYPosition({
        boardTasks,
        columnIndexSrc,
        columnIndexDist,
        taskIndexDist,
        taskIndexSrc,
      });
    } else {
      newBoardTasks = moveTaskToYPosition({
        boardTasks,
        columnIndexSrc,
        taskIndexDist,
        taskIndexSrc,
      });
    }

    // update boards context
    setBoards((prev) => {
      const newBoards = [...prev];
      newBoards.find((item) => item.id === boardId).columns = newBoardTasks;
      return newBoards;
    });
    // update on local storage data
    updateColumnsOfBoard(boardId, newBoardTasks);
  };
  return (
    <div
      className={`transition flex ${
        showSideBar ? "w-[calc(100vw-350px)]" : "w-screen"
      }`}
    >
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="p-4 grid grid-cols-mainGrid  gap-2 h-[calc(100vh-50px)] overflow-x-auto w-11/12	 ">
          {boardTasks.map(({ status, tasks, bulletColor }, index) => (
            <TaskList
              listIndex={index}
              key={status}
              status={status}
              tasks={tasks}
              bulletColor={bulletColor}
              boardId={boardId}
            />
          ))}
        </div>
      </DragDropContext>

      <button
        className="w-fit flex justify-center items-center p-2 m-2 rounded border-2 dark:border-0 shadow-lg  dark:text-white  dark:bg-[#272835]"
        onClick={handleAddNewColumn}
      >
        + New Column
      </button>
      {showAddNewColumnModal && (
        <AddColumnModal
          showModalHandler={setShowAddNewColumnModal}
          boardIdToAddColumn={boardId}
        />
      )}
    </div>
  );
}

export default BoardContainer;
