import { useState, useContext } from "react";
import AddTaskModal from "./AddTaskModal";
import { removeBoardByTitle } from "../data/local-storage/boards";
import { BoardsContext } from "../context/BoardsContext";
import AccMenu from "./AccMenu";
import ConfirmModal from "./ConfirmModal";
function ActionBar({ boardName, addNewTaskHandler, showSideBarHandler }) {
  const { setBoards, reloadBoards } = useContext(BoardsContext);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const deleteBoard = () => {
    setShowConfirmDialog(false);
    setBoards(removeBoardByTitle(boardName));
    reloadBoards();
  };
  const updateBoard = () => {
    console.log("update");
  };

  const OPTIONS = [
    {
      title: "Update",
      extraStyle: " text-blue-700 dark:text-blue-300",
      selectedHandler: updateBoard,
    },
    {
      title: "Delete",
      extraStyle: " text-pink-700 ",
      selectedHandler: () => setShowConfirmDialog(true),
    },
  ];

  return (
    <div className="transition-colors  duration-300 min-w-fit w-full h-[50px]  sm:px-4 px-2 py-2 bg-white dark:bg-[#272835] dark:text-white text-black flex gap-4 items-center shadow">
      <>
        {showConfirmDialog && (
          <ConfirmModal
            message={"Want delete board ??"}
            hideModalHandler={showConfirmDialog}
            confirmedResponseHandler={deleteBoard}
            unconfirmedResponseHandler={() => setShowConfirmDialog(false)}
          />
        )}
        <button
          className="flex justify-center items-center p-2 "
          onClick={() => {
            showSideBarHandler((prev) => !prev);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={`stroke-[#6166ca] w-8  transition-transform`}
          >
            <path
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="48"
              d="M88 152h336M88 256h336M88 360h336"
            />
          </svg>
        </button>
      </>
      <h2 className="flex-1 font-bold text-xl capitalize ">
        {boardName || "No Board Selected"}
      </h2>
      {boardName ? (
        <>
          <button
            className="text-white bg-[#6166ca] py-1 sm:px-4 px-2 sm:text-sm text-xs rounded-full hover:opacity-90"
            onClick={() => {
              setShowAddTaskModal(true);
            }}
            title="add new task"
          >
            + <span className="md:inline hidden">Add New Task</span>
          </button>
          {/* <DropdownMenu options={OPTIONS} /> */}
          <AccMenu options={OPTIONS} />
          {showAddTaskModal && (
            <div
              className={`absolute top-0 left-0 h-full w-full  flex justify-center items-center z-40 bg-black/75`}
              onClick={(e) => {
                e.stopPropagation();
                setShowAddTaskModal((prev) => !prev);
              }}
            >
              <AddTaskModal
                boardName={boardName}
                setShowAddTaskModal={setShowAddTaskModal}
              />
            </div>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ActionBar;
