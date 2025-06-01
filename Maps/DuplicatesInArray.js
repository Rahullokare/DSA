function duplicatesInArray(arr) {
  const map = new Map();
  for (let nums of arr) {
    map.set(nums, (map.get(nums) || 0) + 1);
  }
  console.log(map);

  for (let [, value] of map) {
    if (value > 1) {
      return true;
    }
  }

  return false;
}
console.log(duplicatesInArray([1, 2, 2, 4, 5]));
// Map(4) { 1 => 1, 2 => 2, 4 => 1, 5 => 1 }
// true
