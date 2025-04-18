function searchInsert(arr, target) {
  for (let index = 0; index < arr.length; index++) {
    // console.log(index + 1 === target, "index + 1 === target");
    // console.log(arr[index] === target, "arr[index] === target");
    if (index + 1 === target && arr[index] === target) {
      return index;
    } else if (index + 1 === target && arr[index] != target) {
      return index;
    }
  }
}
console.log(searchInsert([1, 2, 3, 5, 6], 5));
