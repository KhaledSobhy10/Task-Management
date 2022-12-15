import React, { useState } from "react";
import TaskList from "./TaskList";
import AddColumnModal from "./AddColumnModal";

function BoardContainer({ boardId, boardTasks, showSideBar }) {
  // const data = arrayOfObjectsFromMap(groupBy(boardTasks.tasks, "status"));
  console.log("data", boardTasks);

  const [showAddNewColumnModal, setShowAddNewColumnModal] = useState(false);
  const handleAddNewColumn = () => {
    // show add new column modal
    setShowAddNewColumnModal(true);
  };
  return (
    <div
      className={`transition flex ${
        showSideBar ? "w-[calc(100vw-350px)]" : "w-screen"
      }`}
    >
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
