import { removeItem, insertItem } from "../utility/arrays-manipulate";

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("Remove item from array begin", () => {
  expect(removeItem(shoppingList, 0)).toEqual([
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ]);
});

test("Remove item from array last", () => {
  expect(removeItem(shoppingList, shoppingList.length - 1)).toEqual([
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
  ]);
});

test("Remove item from array middle", () => {
  expect(removeItem(shoppingList, 2)).toEqual([
    "diapers",
    "kleenex",
    "paper towels",
    "milk",
  ]);
});

test("insert item from array begin", () => {
  expect(insertItem(shoppingList, 0, "bread")).toEqual([
    "bread",
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ]);
});

test("insert item from array last", () => {
  expect(insertItem(shoppingList, shoppingList.length, "bread")).toEqual([
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
    "bread",
  ]);
});

test("insert item from array middle", () => {
  expect(insertItem(shoppingList, 2, "bread")).toEqual([
    "diapers",
    "kleenex",
    "bread",
    "trash bags",
    "paper towels",
    "milk",
  ]);
});
