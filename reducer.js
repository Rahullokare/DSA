function lazyReduce(nums, fn, init) {
  let accumulation = init;
  for (let i = 0; i < nums.length; i++) {
    accumulation = fn(accumulation, nums[i], i);
  }
  function reducer(nextVal) {
    if (nextVal === undefined) {
      return accumulation; // If called without arguments, return the accumulated value
    }
    accumulation = fn(accumulation, nextVal);
    return reducer;
  }
  return reducer;
}
const sumFn = (acc, num) => acc + num;

const lazySum = lazyReduce([1, 2, 3], sumFn, 0);
console.log(lazySum()); // Output: 6

const lazySumMore = lazySum(4)(5);
console.log(lazySumMore());
