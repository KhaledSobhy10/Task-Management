import { DOING_COLOR, TODO_COLOR, DONE_COLOR } from "../constants/status-color";

export function getColor(status) {
  switch (status) {
    case "doing":
      return DOING_COLOR;
    case "done":
      return DONE_COLOR;
    case "todo":
      return TODO_COLOR;
    default:
      return "bg-white";
  }
}
