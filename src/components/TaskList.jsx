import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

function TaskList({ status, tasks, bulletColor, listIndex, boardId }) {
  return (
    <div className="flex flex-col gap-2 text-gray-500 overflow-hidden">
      <div className="flex justify-start items-center text-sm gap-2 p-2 flex-wrap">
        <div
          className={`rounded-full w-3 h-3 font-light	`}
          style={{ backgroundColor: bulletColor }}
        ></div>
        {`${status.toUpperCase()} (${tasks.length})`}
      </div>
      <Droppable droppableId={`${listIndex}`}>
        {(provided) => (
          <div
            className="flex flex-col gap-2 min-w-full min-h-full  max-w-fit overflow-y-auto  px-2 py-1 "
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
    </div>
  );
}

export default TaskList;
