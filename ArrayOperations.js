function firstOccurenceOfduplicateNumberInArray(arr) {
  let arrObj = {};
  for (let num of arr) {
    arrObj[num] = (arrObj[num] || 0) + 1;
  }
  for (let keys in arrObj) {
    if (arrObj[keys] > 1) {
      return `Number ${keys} is repeated ${arrObj[keys]} times`;
    }
  }
}
// console.log(firstOccurenceOfduplicateNumberInArray([1, 23, 4, 5, 5, 6, 6]));
const array = [1, 2, 2, 2, 3, 4];
function findAllUniuqueNumber(arr) {
  const arrObj = {};
  let uniqueArr = [];
  for (const num of arr) {
    arrObj[num] = (arrObj[num] || 0) + 1;
  }
  //   console.log(arrObj);

  for (let keys in arrObj) {
    console.log(!arrObj[keys] > 1);

    if (arrObj[keys] <= 1) {
      uniqueArr.push(Number(keys));
    }
  }
  return uniqueArr;
}
// console.log(findAllUniuqueNumber(array));

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7];

function findInterSectionOfArray(arr1, arr2) {
  let interSecArr = [];
  let arrObj = {};
  for (let num of arr1) {
    arrObj[num] = (arrObj[num] || 0) + 1;
  }
  for (let num of arr2) {
    arrObj[num] = (arrObj[num] || 0) + 1;
  }
  console.log(arrObj);

  for (let keys in arrObj) {
    if (arrObj[keys] > 1) {
      interSecArr.push(Number(keys));
    }
  }
  return interSecArr;
}
console.log(findInterSectionOfArray(arr1, arr2));
