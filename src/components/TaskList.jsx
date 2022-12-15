import React, { useContext } from "react";
import { getColor } from "../utility/status-color-generator";
import Task from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { rearrange } from "../utility/arrays-manipulate";
import { BoardsContext } from "../context/BoardsContext";
import { updateTasksOfColumnInBoard } from "../data/local-storage/boards";

function TaskList({ status, tasks, bulletColor, listIndex, boardId }) {
  const { setBoards } = useContext(BoardsContext);
  const handleOnDragEnd = (result) => {
    if (!result.source || !result.destination) return;
    const rearrangedTasks = rearrange(
      tasks,
      result?.source?.index,
      result?.destination?.index
    );
    //update boards context
    setBoards((prev) => {
      const newBoards = [...prev];
      newBoards.find((item) => item.id === boardId).columns[listIndex].tasks =
        rearrangedTasks;
      return newBoards;
    });
    //update on local storage data
    updateTasksOfColumnInBoard(boardId, listIndex, rearrangedTasks);
  };
  return (
    <div className="flex flex-col gap-2 text-gray-500 overflow-hidden">
      <div className="flex justify-start items-center text-sm gap-2 p-2 flex-wrap">
        <div
          className={`rounded-full w-3 h-3 font-light	`}
          style={{ backgroundColor: bulletColor }}
        ></div>
        {`${status.toUpperCase()} (${tasks.length})`}
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId={status}>
          {(provided) => (
            <div
              className="flex flex-col gap-2  w-fit overflow-y-auto  px-2 py-1"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
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
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default TaskList;
