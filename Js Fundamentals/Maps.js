const string = "hello hello what dsjfl hello";

const countWordFrequency = (string) => {
  const words = string.toLowerCase();
  const map = new Map();
  for (const word of words) {
    map.set(word, (map.get(word) || 0) + 1);
    console.log(map.get(word), "map get");
  }
  return map;
};
// console.log(countWordFrequency(string));

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];
const map = new Map(people);
const groupByAge = (people) => {
  const map = new Map();

  for (const person of people) {
    if (map.get(person.age)) {
      map.get(person.age).push(person);
    } else {
      map.set(person.age, [person]);
    }
  }
  return map;
};
console.log(groupByAge(people));

const add = people.reduce((acc, person) => acc + person.age, 0);
console.log(add);
