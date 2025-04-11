function countDigitInNumber(num) {
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

console.log(countDigitInNumber(-123456789), "ksdhf");

const groupByAge = (people) => {
  const map = new Map();

  for (const person of people) {
    if (map.get()) {
    }
  }
};
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];
