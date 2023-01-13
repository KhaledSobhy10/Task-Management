import { useContext, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BoardsContext } from "../context/BoardsContext";
import { updateBoard } from "../data/local-storage/boards";
import { motion } from "framer-motion";
function UpdateTaskModal({
  task,
  boardName,
  setShowUpdateTaskModal,
  taskIndex,
  listIndex,
}) {
  const { boards, setBoards } = useContext(BoardsContext);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [subTasksInput, setSubTasksInput] = useState(task.subTasks);
  const boardColumnsTitles = useMemo(() => {
    const currentBoard = boards.find((board) => board.title === boardName);
    return currentBoard?.columns.map(({ status }) => status);
  }, [boardName]);

  const onSubmitHandler = () => {
    const updatedtask = {
      id: task.id,
      title,
      description,
      status,
      subTasks: subTasksInput.filter(({ subTask }) => subTask.trim() !== ""),
    };
    console.log(
      "🚀 ~ file: UpdateTaskModal.jsx:32 ~ onSubmitHandler ~ updatedtask",
      updatedtask
    );

    setBoards((prev) => {
      const boardsHelper = [...prev];
      const currentBoard = boardsHelper.find(
        (board) => board.title === boardName
      );

      if (task.status === updatedtask.status) {
        const currentColumn = currentBoard.columns.find(
          (column) => column.status === status
        );
        const newTaskList = currentColumn.tasks.map((taskItem) =>
          taskItem.id === updatedtask.id ? updatedtask : taskItem
        );
        console.log(
          "🚀 ~ file: UpdateTaskModal.jsx:50 ~ setBoards ~ newTaskList",
          newTaskList
        );
        currentColumn.tasks = newTaskList;
      } else {
        // delete task from prev list(column)
        const currentTaskList = currentBoard.columns[listIndex].tasks;
        currentTaskList.splice(taskIndex, 1);

        const wantedTasksList = currentBoard.columns.find(
          (column) => column.status === updatedtask.status
        );
        wantedTasksList.tasks.push(updatedtask);
        console.log("here");
      }

      updateBoard(currentBoard);
      return boardsHelper;
    });

    setShowUpdateTaskModal(false);
  };
  const onChangeHandler = (e, index) => {
    setSubTasksInput((prev) => {
      const { name, value } = e.target;
      const list = [...prev];
      list[index][name] = value;
      return list;
    });
  };

  const removeSubTaskInput = (index) => {
    setSubTasksInput((prev) => {
      const list = [...prev];
      list.splice(index, 1);
      console.log(list);
      return list;
    });
  };

  const addSubTaskHandler = () => {
    setSubTasksInput((prev) => [
      ...prev,
      { id: uuidv4(), subTask: "", isDone: false },
    ]);
  };
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      className="lg:w-1/3   w-[90%] min-h-fit max-h-[99%]  p-4 bg-white shadow dark:bg-[#272835] z-50 flex flex-col gap-2 rounded-lg  overflow-y-auto"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {/* Head */}
      <h1 className="dark:text-white font-bold">Update Task</h1>
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler();
        }}
      >
        <label className="text-sm font-bold flex flex-col gap-1 dark:text-white ">
          Title
          <input
            required
            type={"text"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="font-normal text-sm dark:bg-[#272835] outline-none ring-1 ring-gray-600 rounded px-1 py-2 "
            placeholder="e.g Take coffee break"
          />
        </label>
        <label className="text-sm dark:text-white  font-bold flex flex-col gap-2">
          Description
          <textarea
            type={"text"}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="font-normal text-sm dark:bg-[#272835] outline-none ring-1 ring-gray-600 rounded px-1 py-2 min-h-fit max-h-[120px]"
            placeholder="e.g Take coffee break"
          />
        </label>
        <div className=" text-sm font-bold dark:text-white  ">
          Subtasks
          <div className="flex flex-col gap-2 max-h-[100px] overflow-y-auto">
            {subTasksInput.map(({ subTask }, index) => (
              <div
                className="flex gap-2 items-center m-1 dark:text-white "
                key={index}
              >
                <input
                  type={"text"}
                  className=" font-normal grow text-sm dark:bg-[#272835] outline-none ring-1 ring-gray-600 rounded px-1 py-2 "
                  name="subTask"
                  value={subTask}
                  onChange={(e) => onChangeHandler(e, index)}
                  placeholder={`n.${index + 1} subtask`}
                />
                <button
                  type={"button"}
                  onClick={() => removeSubTaskInput(index)}
                >
                  {"X"}
                </button>
              </div>
            ))}
          </div>
        </div>
        <button
          className="w-full dark:bg-white text-[#6166ca] font-bold text-sm rounded-full py-2"
          onClick={addSubTaskHandler}
          type={"button"}
        >
          + Add New Subtask
        </button>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="status" className="dark:text-white">
            Status
          </label>
          <select
            name="status"
            id="status"
            className="capitalize dark:text-white text-sm dark:bg-[#272835]  outline-none ring-1 ring-gray-600 rounded px-1 py-2 "
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            {boardColumnsTitles.map((status) => (
              <option value={status} className="capitalize" key={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <button
          type={"submit"}
          className="w-full bg-[#6166ca] text-white font-bold text-sm rounded-full py-2"
        >
          Save Changes
        </button>
      </form>
    </motion.div>
  );
}

export default UpdateTaskModal;
