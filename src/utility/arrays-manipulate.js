export function rearrange(arr, sourceIndex, distIndex) {
  if (!arr || !arr.length) return [];
  if (sourceIndex === distIndex || arr.length === 1) return arr;

  const newItems = [...arr];
  const [removed] = newItems.splice(sourceIndex, 1);
  newItems.splice(distIndex, 0, removed);

  return newItems;
}

/**
 * remove item from that index
 * @param arr list to remove item from it
 * @param indexOfItem index of item to be removed
 * @returns new array without item
 */
export const removeItem = (arr, indexOfItem) => {
  const newArray = [...arr];
  newArray.splice(indexOfItem, 1);
  return newArray;
};

/**
 * insert item to array
 * @param array to add item to it
 * @param indexToPutItem index of item to be inserted
 * @returns new array with item
 */
export const insertItem = (arr, indexToPutItem, item) => {
  const newArray = [...arr];
  newArray.splice(indexToPutItem, 0, item);
  return newArray;
};
