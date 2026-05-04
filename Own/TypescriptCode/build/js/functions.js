//NB: we can not do these with interfaces
let myName = 31;
let yourName;
yourName = 'salman';
yourName = 'ammy';
yourName = 'rachel';
//---------functions---------\\
const add = (a, b) => {
    return a + b;
};
const logMsg = (Message) => {
    console.log(Message);
};
const repMsg = (Message) => {
    console.log(Message);
};
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
let subtract2 = (a, b) => {
    return a - b;
};
let subtract3 = function (a, b) {
    return a - b;
};
multiply(1, 2);
///Optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') { //This is type gard 
        return a + b + c;
    }
    return a + b;
};
const SumAll = (a, b, c = 2) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
SumAll(2, 3); // We dont have to pass the value of c because c is already defined
SumAll(3, 4, undefined); //we can also say undefined as it it present already
///Rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
// Never Type
const createError = (errmsg) => {
    throw new Error(errmsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const numberorstring = (value) => {
    if (typeof value === 'string') {
        return 'string';
    }
    if (typeof value === 'number') {
        return 'number';
    }
    return createError('this should never happen'); // we must have specific return because it fears an undefined state or situation
};
///Custom type gard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
export {};
//# sourceMappingURL=functions.js.map