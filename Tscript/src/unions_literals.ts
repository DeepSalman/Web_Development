//Union type = a variable can be one type OR another.

let value:string|number;
value = "Hello";
value = 10;

//Can be more than 2 types
let id: number|string|boolean;

//Union can be used in object field
type User = {
  id: number | string;
  name: string;
};

//Function parameters with unions
function printId(id: number | string) {
  console.log("Your ID:", id);
}


//Special case :
function show(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); 
  } else {
    console.log(id.toFixed(2));
  }
}

////////////////////////////////////////////////////////////
//Literals:

//Restricting a value to specific exact words.
let size: "small" | "medium" | "large";


//this is very powerful for 
// This is VERY powerful for:
// Button variants
// API statuses
// Theme modes (dark/light)
// Form validation
// TanStack Query status checks
// Routing parameters

