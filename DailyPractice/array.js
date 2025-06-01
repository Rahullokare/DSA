// Input:
const arr = [1, 2, 2, 4, 3, 3, 3, 1];

// // Output:
// [3, 3, 3, 1, 1, 2, 2, 4]

function findMostFrequentElementAndArrange(arr) {
  const map = new Map();
  const newarr = [];
  for (const num of arr) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  for (let [key, value] of map) {
    for (let i = 0; i < value; i++) {
      newarr.push(key);
    }
  }

  return newarr;
}
console.log(findMostFrequentElementAndArrange(arr));
