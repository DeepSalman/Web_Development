"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Method 1
function add(a, b) {
    return a + b;
}
//Method 2: arrow functions 
const multiply = (x, y) => {
    return x * y;
};
//Method 3: Void Functions
function logMessage(msg) {
    console.log(msg);
}
//Method 4:Optional parameters
function great(name) {
    return name ? 'hello,$(name)' : "hello!";
}
//Method 5 : Default parameters
function power(base, exp = 2) {
    return base ** exp;
}
const s = (x, y) => x + y;
// React components use function types.
// Event handlers use function types.
// API functions use function types.
// TanStack Query callbacks use function types.
// Utility functions use them everywhere.
//Method 8:
//A function that never returns (infinite loop, always throws):
function fail(msg) {
    throw new Error(msg);
}
//# sourceMappingURL=functions.js.map