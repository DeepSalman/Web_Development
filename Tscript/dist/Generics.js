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
//# sourceMappingURL=Generics.js.map