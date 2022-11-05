import React, { useContext, useState } from "react";
import { isTaskDone } from "../utility/generate-tasks-report";
import { useParams } from "react-router-dom";
import { BoardsContext } from "../context/BoardsContext";
import { updateBoard } from "../data/local-storage/boards";

function SubTask({ subTask, parentTaskIndex, subTaskIndex, listIndex }) {
  const { setBoards } = useContext(BoardsContext);
  const { boardName } = useParams();
  const [taskDone, setTaskDone] = useState(subTask.isDone);

  const taskStatusHandler = () => {
    setBoards((prev) => {
      const list = [...prev];
      const board = list.find((boardItem) => boardItem.title === boardName);
      board.columns[listIndex].tasks[parentTaskIndex].subTasks[
        subTaskIndex
      ].isDone = !taskDone;
      updateBoard(board);
      return list;
    });
    setTaskDone((prev) => !prev);
  };
  return (
    <label
      className={`container p-2 h-fit dark:bg-[#1b1c29] bg-gray-300 break-words flex gap-2 ${
        taskDone ? "line-through" : "dark:text-white "
      }`}
    >
      {subTask.subTask}
      <input type="checkbox" checked={taskDone} onChange={taskStatusHandler} />
      <span class="checkmark"></span>
    </label>
  );
}

export default SubTask;
