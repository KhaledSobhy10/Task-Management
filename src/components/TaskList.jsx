import React from "react";
import { getColor } from "../utility/status-color-generator";
import Task from "./Task";

function TaskList({ status, tasks, bulletColor, listIndex }) {
  return (
    <div className="flex flex-col gap-2 text-gray-500 overflow-hidden">
      <div className="flex justify-start items-center text-sm gap-2 p-2 flex-wrap">
        <div
          className={`rounded-full w-3 h-3 font-light	`}
          style={{ backgroundColor: bulletColor }}
        ></div>
        {`${status.toUpperCase()} (${tasks.length})`}
      </div>
      <div className="flex flex-col gap-2  w-fit overflow-y-auto  px-2 py-1">
        {tasks &&
          tasks.map(({ title, description, subTasks }, index) => (
            <Task
              listIndex={listIndex}
              taskIndex={index}
              status={status}
              subTasks={subTasks}
              title={title}
              description={description}
              key={title}
            />
          ))}
      </div>
    </div>
  );
}

export default TaskList;
