import React, { useState, useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import BorderTabsBuilder from "./BorderTabsBuilder";
import AddBoardModal from "./AddBoardModal";
import { BoardsContext } from "../context/BoardsContext";

function SideBar({ currentBoardName, showBar, showSideBarHandler }) {
  const { boards } = useContext(BoardsContext);
  const boardsTitle = boards.map((board) => board.title);

  const [showAddBoardModal, setShowAddBoardModal] = useState(false);
  // absolute top-[50px] left-0 w-full
  return (
    <div
      className={`${
        showBar ? "" : "hidden"
      }  h-[calc(100%-50px)]  w-fit  bg-black/30 border-r-2 dark:border-r-0`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          showSideBarHandler(false);
          setShowAddBoardModal(false);
        }
      }}
    >
      <aside
        className={`h-[calc(100vh-50px)] z-10  p-2 w-[330px] transition-colors duration-300  dark:border-gray-700 bg-white dark:bg-[#272835] dark:text-white text-black flex flex-col  items-start gap-2`}
      >
        <div className="px-4 text-gray-500 text-sm">{`ALL BOARDS (${boardsTitle.length})`}</div>
        <div className="flex flex-col gap-2 w-full items-start grow overflow-y-auto">
          <BorderTabsBuilder
            tabsTitles={boardsTitle}
            currentBoardName={currentBoardName}
          />
        </div>
        <button
          className="text-[#6166ca] text-sm px-4 flex gap-1"
          onClick={(e) => {
            console.log("create new board");
            e.stopPropagation();
            setShowAddBoardModal(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-5"
          >
            <rect
              x="96"
              y="48"
              width="320"
              height="416"
              rx="48"
              ry="48"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="60"
              d="M320 48v416"
            />
          </svg>
          {"+Create New Board"}
        </button>
        <ThemeToggle />
        <button
          className="px-4 py-4 flex gap-2 mt-auto"
          onClick={() => showSideBarHandler(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-[24px] fill-black dark:fill-white "
          >
            <title>Eye Off</title>
            <path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z" />
            <path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z" />
          </svg>
          {"Hide Sidebar"}
        </button>
      </aside>
      {showAddBoardModal && (
        <div
          className={`absolute top-0 left-0 h-full w-full  flex justify-center items-center z-40 bg-black/75`}
          onClick={(e) => {
            e.stopPropagation();
            setShowAddBoardModal((prev) => !prev);
          }}
        >
          <AddBoardModal setShowAddBoardModal={setShowAddBoardModal} />
        </div>
      )}
    </div>
  );
}

export default SideBar;
