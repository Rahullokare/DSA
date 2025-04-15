// Input: [1,1,1,2,2,3], k = 2
// Output: [1,2]
function topFrqeuentElements(arr) {
  const map = new Map();
  const frquentElementArr = [];
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  for (let [key, value] of map) {
    if (value > 1) {
      frquentElementArr.push(Number(key));
    }
  }
  return frquentElementArr;
}
console.log(topFrqeuentElements([1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 7, 7, 7, 7, 7]));
