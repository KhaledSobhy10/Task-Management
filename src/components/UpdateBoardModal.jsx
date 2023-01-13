import React, { useState, useContext } from "react";

import { updateBoard } from "../data/local-storage/boards";
import { BoardsContext } from "../context/BoardsContext";
import { useNavigate } from "react-router-dom";

function UpdateBoardModal({
  boardId,
  boardName,
  boardColumnsWithTasks,
  setShowUpdateBoardModal,
}) {
  const navigate = useNavigate();
  const { setBoards, boards } = useContext(BoardsContext);
  const [title, setTitle] = useState(boardName);

  const [columnsInput, setColumnsInput] = useState([
    { columnTitle: "todo", bulletColor: "#cc6699" },
    { columnTitle: "doing", bulletColor: "#0084ff" },
  ]);

  const addColumnHandler = () => {
    setColumnsInput((prev) => [
      ...prev,
      {
        columnTitle: "",
        bulletColor: "#000000",
      },
    ]);
  };

  const onChangeHandler = (e, index) => {
    setColumnsInput((prev) => {
      const { name, value } = e.target;
      const list = [...prev];
      list[index][name] = value;
      return list;
    });
  };

  const removeColumnInput = (columnName) => {
    setColumnsInput((prev) => prev.filter(({ name }) => name !== columnName));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // build board
    const board = {
      id: boardId,
      title,
      columns: columnsInput
        .filter((item) => item.columnTitle !== "")
        .map((column) => {
          return {
            status: column.columnTitle,
            bulletColor: column.bulletColor,
            tasks: [],
          };
        }),
    };
    console.log(board);
    // add to local storage
    updateBoard(board);
    // add new board to context
    setBoards((prevBoards) =>
      prevBoards.map((item) => (item.id === board.id ? board : item))
    );

    setShowUpdateBoardModal(false);
    navigate(`/boards/${title}`);
  };
  return (
    <div
      className="lg:w-1/3 md:w-1/2  w-[90%] min-h-fit max-h-[99%]  sm:p-6 p-4 bg-white shadow dark:bg-[#272835] z-50 flex flex-col gap-4 rounded-lg  overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Head */}
      <h1 className="dark:text-white font-bold">Update Board</h1>
      <form className="flex flex-col gap-4" onSubmit={onSubmitHandler}>
        <label className="dark:text-white text-sm font-bold flex flex-col gap-2">
          Board Name
          <input
            required
            type={"text"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="font-normal dark:text-white text-sm dark:bg-[#272835] outline-none ring-1 ring-gray-600 rounded px-1 py-2 "
            placeholder="e.g Web development"
            maxLength={25}
          />
        </label>

        <div className="dark:text-white text-sm font-bold ">
          Board Columns
          <div className="flex flex-col gap-2 max-h-[100px] overflow-y-auto">
            {columnsInput.map(({ columnTitle, bulletColor }, index) => (
              <div className="flex gap-2 items-center m-1" key={index}>
                <div className="flex justify-between gap-2	 font-normal grow dark:text-white text-sm dark:bg-[#272835] outline-none ring-1 ring-gray-600 rounded px-1 py-2 ">
                  <input
                    type={"text"}
                    name={"columnTitle"}
                    className=" font-normal grow dark:text-white text-sm dark:bg-[#272835] outline-none"
                    value={columnTitle}
                    placeholder="Ex: Working"
                    onChange={(e) => onChangeHandler(e, index)}
                    maxLength={25}
                  />
                  <input
                    required
                    type={"color"}
                    name={"bulletColor"}
                    value={bulletColor}
                    onChange={(e) => onChangeHandler(e, index)}
                    className="bg-transparent hover:cursor-pointer w-5 h-5"
                  />
                </div>

                <button onClick={() => removeColumnInput(columnTitle)}>
                  {"X"}
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          className="w-full dark:bg-white text-[#6166ca] font-bold text-sm rounded-full py-2"
          onClick={addColumnHandler}
          type={"button"}
        >
          + Add New Column
        </button>

        <button
          className="w-full bg-[#6166ca] text-white font-bold text-sm rounded-full py-2"
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default UpdateBoardModal;
