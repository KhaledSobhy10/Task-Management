const BOARDS = "boards";

export const getBoards = () => {
  const boardsJson = localStorage.getItem(BOARDS);
  return boardsJson ? JSON.parse(boardsJson) : [];
};

export const createBoard = (board) => {
  const boards = getBoards();
  boards.push(board);
  localStorage.setItem(BOARDS, JSON.stringify(boards));
};

export const removeBoard = (boardId) => {
  const boards = getBoards().filter((board) => boardId !== board.id);
  localStorage.setItem(BOARDS, JSON.stringify(boards));
};
export const removeBoardByTitle = (title) => {
  const boards = getBoards().filter((board) => title !== board.title);
  console.log("boards after remove", boards);
  localStorage.setItem(BOARDS, JSON.stringify(boards));
  return boards;
};

export const updateBoard = (board) => {
  const boards = getBoards().map((item) =>
    board.id === item.id ? { ...board } : item
  );
  localStorage.setItem(BOARDS, JSON.stringify(boards));
};

export const getBoard = (boardId) =>
  getBoards().find((item) => item.id === boardId);
