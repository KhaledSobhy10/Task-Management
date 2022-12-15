import React, { useState, useContext } from "react";
import ModalContainer from "./ModalContainer";
import { BoardsContext } from "../context/BoardsContext";
import { getBoard, updateBoard } from "../data/local-storage/boards";

function AddColumnModal({
  addColumnModalHandler,
  showModalHandler,
  boardIdToAddColumn,
}) {
  const { reloadBoards } = useContext(BoardsContext);
  const [columnData, setColumnData] = useState({
    columnTitle: "",
    bulletColor: "#000000",
  });

  const onChangeHandler = (e) => {
    setColumnData((prev) => {
      const { name, value } = e.target;
      const data = { ...prev };
      data[name] = value;
      return data;
    });
  };

  const addColumnHandler = (boardId, columnData) => {
    // update board
    const boardToUpdate = { ...getBoard(boardId) };
    const columnToAdd = {
      status: columnData.columnTitle,
      bulletColor: columnData.bulletColor,
      tasks: [],
    };
    boardToUpdate.columns.push(columnToAdd);
    updateBoard(boardToUpdate);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addColumnHandler(boardIdToAddColumn, columnData);
    reloadBoards();
    showModalHandler((prev) => !prev);
  };
  return (
    <ModalContainer setShoModal={showModalHandler}>
      <div
        className="lg:w-1/3 md:w-1/2  w-[90%] min-h-fit max-h-[99%]  sm:p-6 p-4 bg-white shadow dark:bg-[#272835] z-50 flex flex-col gap-4 rounded-lg  overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Head */}
        <h1 className="dark:text-white font-bold">Add New Column to board</h1>
        <form className="flex flex-col gap-4" onSubmit={onSubmitHandler}>
          <label className="dark:text-white text-sm font-bold flex flex-col gap-2">
            Column title
            <input
              required
              type={"text"}
              name="columnTitle"
              value={columnData.columnTitle}
              onChange={onChangeHandler}
              className="font-normal dark:text-white text-sm dark:bg-[#272835] outline-none ring-1 ring-gray-600 rounded px-1 py-2 "
              placeholder="EX: Done"
              maxLength={25}
            />
          </label>
          <label className="dark:text-white text-sm font-bold flex flex-col gap-2">
            Column color
            <input
              required
              type={"color"}
              name={"bulletColor"}
              value={columnData.bulletColor}
              onChange={onChangeHandler}
              className="bg-transparent hover:cursor-pointer w-5 h-5 rounded-2 "
            />
          </label>
          <button
            className="w-full bg-[#6166ca] text-white font-bold text-sm rounded-full py-2"
            type="submit"
          >
            Done
          </button>
        </form>
      </div>
    </ModalContainer>
  );
}

export default AddColumnModal;
