//Object Prototype

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
arr1.sayHello = () => {
  console.log("Hello, I am arr");
};

arr2.sayHello = () => {
  console.log("Hello, I am arr");
};

//Factory Function

function PersonMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hi, My name is ${this.name}`);
    },
  };

  return person;
}

let p1 = PersonMaker("Niraj", 20);
let p2 = PersonMaker("Sachin", 17);

//New Operator (Constructor - doesn't return anyting and start with capital letter)

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.talk = function () {
//   console.log(`Hi, My name is ${this.name}`);
// };

// let Person1 = new Person("Niraj", 20);
// let Person2 = new Person("Sachin", 17);

//Classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi, My name is ${this.name}`);
  }
}

// let per1 = new Person("Niraj", 20);

//Inheritance

class Student extends Person {
  constructor(name, age, marks) {
    super(name, age); //Parent class constructor is called
    this.marks = marks;
  }

  greet() {
    return "Hello";
  }
}

let s1 = new Student("Niraj", 20, 98);
