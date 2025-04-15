// Input: [1, 2, 3, 2, 4, 2], target = 2
// Output: [1, 3, 5]
function findIndicesOfallOccurences(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target && map.get(target) === undefined) {
      map.set(target, [i]);
    } else if (arr[i] === target && map.get(target) != undefined) {
      map.get(target).push(i);
    }
  }
  return map.get(target);
}
console.log(findIndicesOfallOccurences([1, 2, 3, 2, 4, 2], 2));
