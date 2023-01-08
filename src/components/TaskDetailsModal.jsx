import { useState, useMemo, useContext } from "react";
import SubTasksContainer from "./SubTasksContainer";
import { BoardsContext } from "../context/BoardsContext";
import { useParams } from "react-router-dom";
import { updateBoard } from "../data/local-storage/boards";
import ConfirmModal from "./ConfirmModal";
import ModalContainer from "./ModalContainer";
import UpdateTaskModal from "./UpdateTaskModal";

import { motion } from "framer-motion";
import AccMenu from "./AccMenu";
function TaskDetailsModal({
  id,
  title,
  description,
  status,
  subTasks,
  hideDetailsModalHandler,
  taskIndex,
  listIndex,
}) {
  const { boardName } = useParams();
  const { boards, setBoards } = useContext(BoardsContext);
  const [currentStatus, setCurrentStatus] = useState(status);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const boardColumnsTitles = useMemo(() => {
    const currentBoard = boards.find((board) => board.title === boardName);
    return currentBoard?.columns.map(({ status }) => status);
  }, [boardName]);
  const currentStatusHandler = (e) => {
    setBoards((boards) => {
      // change task from column to another column
      const boardsHelper = [...boards];
      const currentBoard = boardsHelper.find(
        (board) => board.title === boardName
      );
      // delete task from prev list(column)
      const currentTaskList = currentBoard.columns[listIndex].tasks;
      const taskToMove = currentTaskList.splice(taskIndex, 1)[0];

      const wantedTasksList = currentBoard.columns.find(
        (column) => column.status === e.target.value
      );
      wantedTasksList.tasks.push(taskToMove);
      updateBoard(currentBoard);
      return boardsHelper;
    });
    setCurrentStatus(e.target.value);
  };

  const deleteTask = (e) => {
    setBoards((boards) => {
      // change task from column to another column
      const boardsHelper = [...boards];
      const currentBoard = boardsHelper.find(
        (board) => board.title === boardName
      );
      // delete task from  list(column)
      const currentTaskList = currentBoard.columns[listIndex].tasks;
      currentTaskList.splice(taskIndex, 1);
      updateBoard(currentBoard);
      return boardsHelper;
    });
  };

  const deleteTaskHandler = () => {
    setShowConfirmModal(true);
  };
  const updateTaskHandler = () => {
    setShowUpdateModal(true);
  };
  const OPTIONS = [
    {
      title: "Update",
      extraStyle: " text-blue-700 ",
      selectedHandler: updateTaskHandler,
    },
    {
      title: "Delete",
      extraStyle: " text-pink-700 ",
      selectedHandler: deleteTaskHandler,
    },
  ];
  return (
    <div
      className={`absolute top-0 left-0 h-full w-full  flex justify-center items-center z-40 bg-black/75`}
      onClick={hideDetailsModalHandler}
    >
      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        className="lg:w-1/3  w-[90%] min-h-fit max-h-full sm:p-6 p-2 bg-white shadow dark:bg-[#272835] z-50 flex flex-col gap-4 rounded-lg"
      >
        {/* Head */}
        {showConfirmModal && (
          <ConfirmModal
            message="Want delete a task ?"
            hideModalHandler={setShowConfirmModal}
            confirmedResponseHandler={deleteTask}
            unconfirmedResponseHandler={() => {
              console.log("cancel");
            }}
          />
        )}

        {showUpdateModal && (
          <ModalContainer setShoModal={setShowUpdateModal}>
            <UpdateTaskModal
              task={{ title, description, status, subTasks, id }}
              taskIndex={taskIndex}
              listIndex={listIndex}
              boardName={boardName}
              setShowUpdateTaskModal={setShowUpdateModal}
            />
          </ModalContainer>
        )}
        <div className="flex justify-between">
          <strong className="dark:text-white text-xl w-full  break-words">
            {title}
          </strong>
          <AccMenu options={OPTIONS} />
        </div>
        {/* Body */}
        <p className="text-sm break-words">
          {description || (
            <span className="text-blue-500 text-xs">No Description Found</span>
          )}
        </p>
        <SubTasksContainer
          subTasks={subTasks}
          parentTaskIndex={taskIndex}
          listIndex={listIndex}
        />
        <div className="flex flex-col gap-1">
          <label htmlFor="status" className="dark:text-white">
            Current Status
          </label>
          <select
            name="status"
            id="status"
            onChange={currentStatusHandler}
            value={currentStatus}
            className="capitalize dark:text-white text-sm dark:bg-[#272835]  outline-none ring-1 ring-gray-600 rounded px-1 py-2 "
          >
            {boardColumnsTitles.map((title) => (
              <option value={title} className="capitalize" key={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
      </motion.div>
    </div>
  );
}

export default TaskDetailsModal;
