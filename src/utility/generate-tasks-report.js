import { getColor } from "./status-color-generator";

export function getSubTasksDoneMessage(tasks) {
  if (!tasks || !tasks.length) return "No substasks found";
  const doneTasksNum = tasks.filter((task) => task.isDone).length;
  return `${doneTasksNum} of ${tasks.length} substasks`;
}

function test_getSubTasksDoneMessage() {
  const tasks = [
    { title: "foo", status: "done" },
    { title: "boo", status: "todo" },
  ];

  console.log(getSubTasksDoneMessage(tasks));
}

export function getSubTasksDoneMessage2(tasks) {
  if (!tasks || !tasks.length) return "No substasks found";
  const doneTasksNum = tasks.filter((task) => task.isDone).length;
  return `Substasks(${doneTasksNum} of ${tasks.length})`;
}

export function getSubTasksDoneMessage3(tasks) {
  if (!tasks || !tasks.length) return "No substasks found";
  const doneTasksNum = tasks.filter((task) => task.isDone).length;
  return `Substasks(${doneTasksNum} of ${tasks.length})`;
}

export function isTaskDone(taskStatus) {
  return taskStatus === "done";
}

export function getStatistics() {
  const data = [
    { status: "todo", value: 50, color: getColor("todo") },
    { status: "done", value: 20, color: getColor("done") },
    { status: "doing", value: 30, color: getColor("doing") },
  ];
}
