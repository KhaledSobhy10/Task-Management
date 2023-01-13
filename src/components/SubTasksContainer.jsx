import React from "react";
import { getSubTasksDoneMessage2 } from "../utility/generate-tasks-report";
import SubTask from "./SubTask";

function SubTasksContainer({ subTasks, parentTaskIndex, listIndex }) {
  return (
    <>
      {subTasks && subTasks.length ? (
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
                key={subTask.id}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-pink-500 text-xs font-normal">
          No SubTasks found!
        </div>
      )}
    </>
  );
}

export default SubTasksContainer;
