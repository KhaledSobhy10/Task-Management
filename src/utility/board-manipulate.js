import { insertItem, rearrange, removeItem } from "./arrays-manipulate";
/**
 * move task from position to another in same column (tasks list)
 * @param boardTasks  list have column each one is object have tasks list
 * @param columnIndexSrc position of column in boardTasks
 * @param columnIndexSrc position of column in boardTasks
 * @param taskIndexSrc current position of task in column (tasks)
 * @param taskIndexDist future position of task in column (tasks)
 * @returns tasks list
 */
export const moveTaskToYPosition = ({
  boardTasks,
  columnIndexSrc,
  taskIndexSrc,
  taskIndexDist,
}) => {
  const newBoardTasks = [...boardTasks];
  newBoardTasks[columnIndexSrc].tasks = rearrange(
    newBoardTasks[columnIndexSrc].tasks,
    taskIndexSrc,
    taskIndexDist
  );
  return newBoardTasks;
};

/**
 * move task to another position and another column (tasks list)
 * @param boardTasks  list have column each one is object have tasks list
 * @param columnIndexSrc current position of column in boardTasks
 * @param columnIndexDist future position of column in boardTasks
 * @param taskIndexSrc current position of task in column (tasks)
 * @param taskIndexDist future position of task in column (tasks)
 * @returns tasks list
 */
export const moveTaskToXYPosition = ({
  boardTasks,
  columnIndexSrc,
  columnIndexDist,
  taskIndexSrc,
  taskIndexDist,
}) => {
  const newBoardTasks = [...boardTasks];

  const taskToBeMoved = newBoardTasks[columnIndexSrc].tasks[taskIndexSrc];

  newBoardTasks[columnIndexSrc].tasks = removeItem(
    newBoardTasks[columnIndexSrc].tasks,
    taskIndexSrc
  );

  newBoardTasks[columnIndexDist].tasks = insertItem(
    newBoardTasks[columnIndexDist].tasks,
    taskIndexDist,
    taskToBeMoved
  );

  return newBoardTasks;
};
