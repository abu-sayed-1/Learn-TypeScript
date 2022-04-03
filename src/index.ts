// Basic Types
let id: number = 5
let Company: string = "xzy company"
let isPublished: boolean = false
let sum: any = "hello!"
sum = 7

let ids: number[] = [1, 2, 3, 4, 5]
ids.push(10)

let arr: any[] = [1, true, "hello",]

// tuple
let person: [number, string, boolean,] = [10, "Abu Sayed", true]


// tuple array
let employees: [number, string] []
employees = [
    [1, "Abu sayed"],
    [2, "AS"],
    [3, "Raj"],
]


// Union
let pid: string | number | boolean 
pid = 3762


// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right,
};
// console.log(Direction1.Up) output => 1


enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
};

// console.log(Direction2.Left) output => Left


// Objects 
type User = {
    id: number
    name: string
    age: number
    isProgrammer: boolean
};

const user: User = {
    id: 1,
    name: "Abu Sayed",
    age: 20,
    isProgrammer: true
};


// type assertion
let cid: any = 1;
let costumerId = cid as number


// Function 
function addNum(a:number, b: number): number {return a + b;};
console.log(addNum(5, 10))


// Void / avoid the return 
function logMas(massage: string | boolean | number | {}): void {
    console.log(massage)
}

logMas("User not found!")



// Interfaces 
interface UserInterface {
   readonly id: number
    name: string
    // age is Optional
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: "Abu Sayed"
}
// Cannot assign to 'id' because it is a read-only 
// user1.id = 2



interface MathFunc {
    (a: number, b: number): number;
}

const add: MathFunc = (a: number, b: number): number => 20 + 30
const sub: MathFunc = (a: number, b: number): number => 30 - 20



interface PersonInterface {
    id: number
    name: string
    register(): string
}

// Classes 
class Person implements PersonInterface {
    // private | protected | public
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now register`
    }
}

const abu = new Person(1, "Abu Sayed")
// 'id' is private and only accessible within class 
// abu.id = 1

const john = new Person(2, "john Khan")
// console.log(abu, john)
// console.log(john.register())



// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string){
        super (id, name)
        this.position = position
    }
}

const emp = new Employee(1, "Abu Sayed", "Developer");
console.log(emp.register())



// Generics
function getArray <T> (items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray <number> ([1,2,3,4,5,6,7,8])
let strArray = getArray <string> (["Abu", "Sayed", "John"])
// Only number
numArray.unshift(0)

console.log(numArray, strArray)