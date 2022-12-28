import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";
import { motion } from "framer-motion";

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
          <motion.div
            className="flex flex-col gap-2 min-w-full min-h-full  max-w-fit overflow-y-auto  px-2 py-1 "
            {...provided.droppableProps}
            ref={provided.innerRef}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
          >
            {tasks &&
              tasks.map(({ title, description, subTasks, id }, index) => (
                <Task
                  listIndex={listIndex}
                  taskIndex={index}
                  status={status}
                  subTasks={subTasks}
                  title={title}
                  description={description}
                  key={id}
                  id={id}
                />
              ))}
            {provided.placeholder}
          </motion.div>
        )}
      </Droppable>
    </div>
  );
}

export default TaskList;
