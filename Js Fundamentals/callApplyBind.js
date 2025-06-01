// call apply Bind
const obj = {
  name: "rahul",
  age: 23,
  salary: 20000,
  printDetails: function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.salary);
  },
};

obj.printDetails.call({ name: "virat", age: 30, salary: 30000 });
obj.printDetails.apply({ name: "virat", age: 30, salary: 30000 });

const printDetails = obj.printDetails.bind({
  name: "virat",
  age: 30,
  salary: 30000,
});
printDetails();

function greet(city) {
  return `Hello, Hi ${this.name} please come to city ${city}`;
}

const persons = {
  name: "Rahul",
};

console.log(greet.call(persons, "Mumbai"));
console.log(greet.apply(persons, ["Mumbai"]));
// console.log(greet.bind(persons, Mumbai));
