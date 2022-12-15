import { rearrange } from "../utility/arrays-manipulate";
function test0() {
  const arr = [1, 2, 3];
  const result = rearrange(arr, 0, 0);
  const expected = [1, 2, 3];

  console.log("test 0 ", isEqualArrays(expected, result));
}
function test1() {
  const arr = [1, 2, 3];
  const result = rearrange(arr, 1, 2);
  const expected = [1, 3, 2];

  console.log("test 1 ", isEqualArrays(expected, result));
}
function test2() {
  const arr = [1, 2, 3, 4, 5];
  const result = rearrange(arr, 1, 3);
  const expected = [1, 3, 4, 2, 5];
  console.log("test 2 ", isEqualArrays(expected, result));
}

function test3() {
  const arr = [1, 2, 3, 4];
  const expected = [4, 1, 2, 3];
  const result = rearrange(arr, 3, 0);
  console.log("test 3 ", isEqualArrays(expected, result));
}

function test4() {
  const arr = [1, 2, 3, 4, 5, 0];
  const expected = [0, 1, 2, 3, 4, 5];
  const result = rearrange(arr, 5, 0);
  console.log("test 4 ", isEqualArrays(expected, result));
}

function test5() {
  const arr = [0, 1, 2, 3, 5, 4];
  const expected = [0, 1, 2, 3, 4, 5];
  const result = rearrange(arr, 4, 5);
  console.log("test 4 ", isEqualArrays(expected, result));
}

function isEqualArrays(arr1, arr2) {
  if (arr1.toString() === arr2.toString()) {
    return true;
  } else {
    return `${arr1.toString()} not equal ${arr2.toString()}`;
  }
}

test0();
test1();
test2();
test3();
test4();
test5();
