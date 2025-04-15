function twoNumberAddToTarget(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const current_sum = arr[left] + arr[right];
    if (current_sum === target) {
      return [left, right];
    }
    if (current_sum < target) {
      left++;
    } else {
      right++;
    }
  }
}
function twoNumberAddToTargetWithMap(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(arr[i], i);
  }
}
console.log(twoNumberAddToTargetWithMap([1, 2, 4, 5, 7], 9));
