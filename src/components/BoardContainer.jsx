import React from "react";
import TaskList from "./TaskList";
import { groupBy, arrayOfObjectsFromMap } from "../utility/mapping";

function BoardContainer({ boardTasks }) {
  // const data = arrayOfObjectsFromMap(groupBy(boardTasks.tasks, "status"));
  console.log("data", boardTasks);
  return (
    <div className="p-4 grid grid-cols-mainGrid  gap-2 h-[calc(100vh-50px)] overflow-x-auto ">
      {boardTasks.map(({ status, tasks, bulletColor }, index) => (
        <TaskList
          listIndex={index}
          key={status}
          status={status}
          tasks={tasks}
          bulletColor={bulletColor}
        />
      ))}
    </div>
  );
}

export default BoardContainer;
