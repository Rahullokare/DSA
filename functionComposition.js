const add = (x) => x + 2;
const multiply = (x) => x * 3;
const substract = (x) => x - 3;

const compose =
  (...fns) =>
  (value) => {
    return fns.reduceRight((acc, fn) => fn(acc), value);
  };

const composeFunction = compose(add, multiply, substract);

console.log(composeFunction(5));

const trimString = (string) => string.trim();
const toLowerCase = (string) => string.toLowerCase();
const toUpperCase = (string) => string.toUpperCase();
const toArray = (string) => string.split("");

const composeString =
  (...fns) =>
  (value) => {
    return fns.reduce((acc, fn) => fn(acc), value);
  };

const stringFormation = composeString(
  trimString,
  toLowerCase,
  toUpperCase,
  toArray
);

console.log(stringFormation("rahul"));

const composeArray =
  (...fns) =>
  (value) => {
    return fns.reduceRight((acc, fns) => fns(acc), value);
  };

const doubleEachNumber = (arr) => arr.map((d) => d * 2);
const filterNumberGreaterThan10 = (arr) => arr.filter((item) => item < 10);

const processArray = composeArray(doubleEachNumber, filterNumberGreaterThan10);

console.log(processArray([1, 2, 3, 4, 5, 6]));

const composeAsync =
  (...fns) =>
  (value) => {
    return fns.reduceRight((acc, fns) => fns(acc), value);
  };

const getUser = async () => {
  await fetch("https://dummyjson.com/users")
    .then((res) => {
      console.log(res.json);

      return res.json();
    })
    .then(console.log);
};

const composeAsyncfn = composeAsync(getUser);

console.log(composeAsyncfn());
