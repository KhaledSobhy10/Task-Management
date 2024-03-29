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

function BoardContainer({ boardName, boardId, boardTasks, showSideBar }) {
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
      className={` transition-width duration-75 ease flex ${
        showSideBar ? "w-[calc(100vw-350px)] " : "w-screen"
      } flex-wrap h-[95%] overflow-y-auto`}
    >
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="p-4 grid grid-cols-mainGrid  gap-2  w-11/12	 ">
          {boardTasks.map(({ status, tasks, bulletColor }, index) => (
            <TaskList
              listIndex={index}
              key={status + index}
              status={status}
              tasks={tasks}
              bulletColor={bulletColor}
              boardId={boardId}
            />
          ))}
        </div>
      </DragDropContext>

      <button
        className="fixed bottom-5 sm:right-10 right-5 sm:w-fit sm:h-fit w-4 h-4 flex justify-center items-center sm:py-1  p-4  ring-1 dark:ring-2 ring-gray-400 dark:ring-[#6166ca]	 shadow-xl dark:text-white sm:rounded-2 rounded-full"
        onClick={handleAddNewColumn}
        title="Add new column "
      >
        + <span className="sm:block hidden">New Column</span>
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
