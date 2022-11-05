import React from "react";
import { getSubTasksDoneMessage2 } from "../utility/generate-tasks-report";
import SubTask from "./SubTask";

function SubTasksContainer({ subTasks, parentTaskIndex, listIndex }) {
  return (
    <>
      {subTasks ? (
        <div className="flex flex-col gap-2">
          <h2 className="dark:text-white">
            {getSubTasksDoneMessage2(subTasks)}
          </h2>
          <div className="flex flex-col gap-2">
            {subTasks.map((subTask, index) => (
              <SubTask
                subTask={subTask}
                parentTaskIndex={parentTaskIndex}
                subTaskIndex={index}
                listIndex={listIndex}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-pink-500 text-xs font-normal">
          No SubTasks found!{" "}
          <button className="bg-[#6166ca] text-xs text-white px-2 py-1 rounded">
            Add
          </button>
        </div>
      )}
    </>
  );
}

export default SubTasksContainer;
