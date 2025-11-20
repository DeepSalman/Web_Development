"use strict";
//Generics = Templates for types
Object.defineProperty(exports, "__esModule", { value: true });
// React + TypeScript
// TanStack Query
// API wrappers
// Utility functions
// Data structures
//Basic function: 
function identity(x, y) {
    return x + y;
}
//Basic generic function 
//In here : T means any type caller will provide !
//Like a place holder
function identity1(value) {
    return value;
}
identity1(10);
identity1("Hello");
identity1(true);
identity1({ name: "salman" });
//Generics with arrow function
const wrap = (value) => {
    return [value];
};
wrap(10); // number[]
wrap("abc"); // string[]
wrap({ a: 1 }); // object[]
const UserRes = {
    success: true,
    data: ['Salman', 'farsi']
};
const numBox = { item: 10 };
const strBox = { item: "Hello" };
///Generic Constrains :
//You can force T to be only certain kinds of types
//Example: T must be an object with a name property 
function printName(object) {
    console.log(object.name);
}
printName({ name: "salman", age: 20 });
const p1 = {
    first: "Salman",
    second: 4,
};
//# sourceMappingURL=generic.js.map