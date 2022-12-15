import React, { useState } from "react";
import { getSubTasksDoneMessage } from "../utility/generate-tasks-report";
import TaskDetailsModal from "./TaskDetailsModal";
import { Draggable } from "react-beautiful-dnd";

function Task({ title, description, subTasks, status, taskIndex, listIndex }) {
  const [showDetails, setShowDetails] = useState(false);
  const hideDetailsModalHandler = (e) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) setShowDetails(false);
  };

  const showDetailsModalHandler = (e) => {
    e.stopPropagation();
    setShowDetails(true);
  };

  return (
    <Draggable key={title} draggableId={title} index={taskIndex}>
      {(provided) => (
        <div
          className="capitalize transition-colors duration-300 h-fit min-w-fit w-[250px] shadow-md dark:bg-[#272835]  rounded p-4 flex flex-col gap-2 justify-center font-bold hover:cursor-pointer"
          onClick={showDetailsModalHandler}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <span
            className="dark:text-white text-base text-black "
            onClick={showDetailsModalHandler}
          >
            {title}
          </span>
          <span className="text-sm font-normal">
            {getSubTasksDoneMessage(subTasks)}
          </span>
          {showDetails && (
            <TaskDetailsModal
              taskIndex={taskIndex}
              listIndex={listIndex}
              title={title}
              description={description}
              subTasks={subTasks}
              status={status}
              hideDetailsModalHandler={hideDetailsModalHandler}
            />
          )}
        </div>
      )}
    </Draggable>
  );
}

export default Task;
