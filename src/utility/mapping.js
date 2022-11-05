function groupBy(array, key) {
  const map = new Map();

  array.forEach((element) => {
    if (map.has(element[key])) {
      map.get(element[key]).push(element);
    } else {
      map.set(element[key], [element]);
    }
  });
  return map;
}

function arrayOfObjectsFromMap(map) {
  const array = [];
  map.forEach((value, key) => {
    array.push({ status: key, tasks: value });
  });
  return array;
}

function test_arrayOfObjectsFromMap() {
  const array = [
    { name: "kh", gender: "male" },
    { name: "ali", gender: "male" },
    { name: "mar", gender: "female" },
    { name: "hab", gender: "female" },
    { name: "mo", gender: "male" },
    { name: "nora", gender: "female" },
  ];

  const resultMap = groupBy(array, "gender");

  console.log(arrayOfObjectsFromMap(resultMap));
}

function test_groupBy() {
  const array = [
    { name: "kh", gender: "male" },
    { name: "ali", gender: "male" },
    { name: "mar", gender: "female" },
    { name: "hab", gender: "female" },
    { name: "mo", gender: "male" },
    { name: "nora", gender: "female" },
  ];

  const resultMap = groupBy(array, "gender");
  console.log(resultMap);
  console.log("as array", Array.from(resultMap));
}

function getStatusOptions(currentStatus) {
  const statusList = ["doing", "done", "todo"];
  const result = [
    currentStatus,
    ...statusList.filter((status) => status !== currentStatus),
  ];
  return result;
}

function test_getStatusOptions() {
  console.log(getStatusOptions("doing"));
}
// test_getStatusOptions();
export { arrayOfObjectsFromMap, groupBy, getStatusOptions };
