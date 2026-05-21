const name='Bangladesh' //declaring a constant value, you can not call const variable before declaring 
let price = 100 //Let can be changed any time! 

function sum(num1,num2){ //Parameter
    const total = num1+num2;
    console.log(total)
}

sum(10,20) //function call with Arguments:


// Default parameter 
function summation(num1,num2=0){
    const total=num1+num2
    console.log(total)
}

summation(12)

//Template string with back tick
const poem = `this line will go for 
second line `

console.log(poem)



//Function Declaration
function add(num1,num2){
    return num1+num2
}

//function Expression
const addition =function(num1,num2){
    return num1+num2
}

const result = addition(10,20)
console.log(result)


//Arrow function
const addition2 = (num1,num2)=> num1 + num2
const multiply = (num1,num2)=>num1*num2

const result1 = addition2(20,30)
console.log(result1)


const result12 = multiply(2,3)
console.log(result12)


//Multi line arrow function
const doMath = (x,y)=> {
    const makeDouble = x*2
    const makeAgainDouble = y*2
    const result = makeAgainDouble+makeDouble
    return result
}




