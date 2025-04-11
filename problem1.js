const array = ["rahul", "Virat", "rahul", "vijay", "Ms", "Rohit"];

const findStudentFromArray = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      return allStudents[i];
    }
  }
};

console.log(findStudentFromArray(array, "rahul"));

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;

    return this.length;
  }

  get(index) {
    return this.data[index];
  }
  pop() {
    const lastItem = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  shift() {
    const firstItem = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }
  deleteByIndex(index) {
    const item = this.data[index];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const myNewArray = new MyArray();

console.log(myNewArray.push("apple"));
console.log(myNewArray.push("mango"));
console.log(myNewArray.push("papaya"));
// console.log(myNewArray.get(1));

// console.log(myNewArray.pop());

console.log(myNewArray, "original array");
// console.log(myNewArray.shift());

console.log(myNewArray.deleteByIndex(2));

console.log(myNewArray, "modified");

let string = "hello";
