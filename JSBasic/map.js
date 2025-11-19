//In js, Map is a built in array method used to transform each element
//of an array and return a new array with the result without changing the original array
//const newArray = oldArray.map((element, index, array) => {
    // return new value for each element
//});



const numbers = [1,2,3,4];
const doubled = numbers.map(num=>num*4);

console.log(numbers)
console.log(doubled)


//Converting Strings to uppercase 

const fruits = ["apple","cherry","mango","banana","strawberry"];
const upfruits = fruits.map(fr => fr.toUpperCase());

console.log(fruits)
console.log(upfruits)


//Using Index
const number = [10, 20, 30];
const addition = number.map((nam,indx) => nam+indx)

console.log(addition)