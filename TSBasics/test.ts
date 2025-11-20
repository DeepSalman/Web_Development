console.log("Example 1: ");

type Greet = (name: string) => string;

// OLD (Wrong): const greet: Greet = (n) => 'Hello,$(n)';
// NEW (Correct):
const greet: Greet = (n) => `Hello, ${n}`; 

console.log(greet("Salman!"));