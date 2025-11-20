"use strict";
//Union type = a variable can be one type OR another.
Object.defineProperty(exports, "__esModule", { value: true });
let value;
value = "Hello";
value = 10;
//Can be more than 2 types
let id;
//Function parameters with unions
function printId(id) {
    console.log("Your ID:", id);
}
//Special case :
function show(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed(2));
    }
}
////////////////////////////////////////////////////////////
//Literals:
//Restricting a value to specific exact words.
let size;
//this is very powerful for 
// This is VERY powerful for:
// Button variants
// API statuses
// Theme modes (dark/light)
// Form validation
// TanStack Query status checks
// Routing parameters
//# sourceMappingURL=unions_literals.js.map