"use strict";
// Basic Types
let id = 5;
let Company = "xzy company";
let isPublished = false;
let sum = "hello!";
sum = 7;
let ids = [1, 2, 3, 4, 5];
ids.push(10);
let arr = [1, true, "hello",];
// tuple
let person = [10, "Abu Sayed", true];
// tuple array
let employees;
employees = [
    [1, "Abu sayed"],
    [2, "AS"],
    [3, "Raj"],
];
// Union
let pid;
pid = 3762;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
;
// console.log(Direction1.Up) output => 1
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
;
const user = {
    id: 1,
    name: "Abu Sayed",
    age: 20,
    isProgrammer: true
};
// type assertion
let cid = 1;
let costumerId = cid;
// Function 
function addNum(a, b) { return a + b; }
;
console.log(addNum(5, 10));
// Void / avoid the return 
function logMas(massage) {
    console.log(massage);
}
logMas("User not found!");
const user1 = {
    id: 1,
    name: "Abu Sayed"
};
const add = (a, b) => 20 + 30;
const sub = (a, b) => 30 - 20;
// Classes 
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now register`;
    }
}
const abu = new Person(1, "Abu Sayed");
// 'id' is private and only accessible within class 
// abu.id = 1
const john = new Person(2, "john Khan");
// console.log(abu, john)
// console.log(john.register())
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, "Abu Sayed", "Developer");
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5, 6, 7, 8]);
let strArray = getArray(["Abu", "Sayed", "John"]);
// Only number
numArray.unshift(0);
console.log(numArray, strArray);
