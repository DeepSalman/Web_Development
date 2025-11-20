"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Example 1: ");
// OLD (Wrong): const greet: Greet = (n) => 'Hello,$(n)';
// NEW (Correct):
const greet = (n) => `Hello, ${n}`;
console.log(greet("Salman!"));
// console.log("Hello");
//# sourceMappingURL=test.js.map