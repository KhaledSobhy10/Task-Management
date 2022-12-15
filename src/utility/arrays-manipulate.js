// Want to rearrange some item place by index in array
// input ( [1,2,3,] , sourceIndex , destIndex )
// ex   ([1,2,3] , 1 , 2)
// out  return [1,3,2]

export function rearrange(arr, sourceIndex, destIndex) {
  if (!arr || !arr.length) return [];
  if (sourceIndex === destIndex || arr.length === 1) return arr;
  const result = [];
  result[destIndex] = arr[sourceIndex];
  let indexForResult = 0;
  for (let index = 0; index < arr.length; index++) {
    if (index === sourceIndex) continue;
    if (indexForResult === destIndex) {
      indexForResult++;
      --index;
      continue;
    }
    result[indexForResult++] = arr[index];
  }
  return result;
}
