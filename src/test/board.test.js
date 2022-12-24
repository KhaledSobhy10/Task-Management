import {
  moveTaskToXYPosition,
  moveTaskToYPosition,
} from "../utility/board-manipulate";

test("move task from position to another in same column from 2 ,to >> 0", () => {
  const columnsOfBoard = [
    { tasks: ["task1", "task2", "task3", "task4"] },
    { tasks: ["task11"] },
  ];
  const expected = [
    { tasks: ["task3", "task1", "task2", "task4"] },
    { tasks: ["task11"] },
  ];
  const result = moveTaskToYPosition({
    boardTasks: columnsOfBoard,
    columnIndexSrc: 0,
    taskIndexSrc: 2,
    taskIndexDist: 0,
  });

  expect(expected).toEqual(result);
});

test("move task from position to another in same column 0 ,1", () => {
  const columnsOfBoard = [
    { tasks: ["task1", "task2", "task3", "task4"] },
    { tasks: ["task11"] },
  ];
  const expected = [
    { tasks: ["task2", "task1", "task3", "task4"] },
    { tasks: ["task11"] },
  ];
  const result = moveTaskToYPosition({
    boardTasks: columnsOfBoard,
    columnIndexSrc: 0,
    taskIndexSrc: 0,
    taskIndexDist: 1,
  });

  expect(expected).toEqual(result);
});

test("move task from column to another (col 0 >> 1 ) and position 0 >> 1", () => {
  const columnsOfBoard = [
    { tasks: ["task1", "task2", "task3", "task4"] },
    { tasks: ["task11"] },
  ];
  const expected = [
    { tasks: ["task2", "task3", "task4"] },
    { tasks: ["task11", "task1"] },
  ];

  const result = moveTaskToXYPosition({
    boardTasks: columnsOfBoard,
    columnIndexSrc: 0,
    columnIndexDist: 1,
    taskIndexSrc: 0,
    taskIndexDist: 1,
  });

  expect(expected).toEqual(result);
});

test("move task from column to another (col 1 >> 0 ) and position 0 >> 4", () => {
  const columnsOfBoard = [
    { tasks: ["task1", "task2", "task3", "task4"] },
    { tasks: ["task11"] },
  ];
  const expected = [
    { tasks: ["task1", "task2", "task3", "task4", "task11"] },
    { tasks: [] },
  ];

  const result = moveTaskToXYPosition({
    boardTasks: columnsOfBoard,
    columnIndexSrc: 1,
    columnIndexDist: 0,
    taskIndexSrc: 0,
    taskIndexDist: 4,
  });

  expect(expected).toEqual(result);
});
