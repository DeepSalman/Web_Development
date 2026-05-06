//Convert to more or less specific 
let a = 'hello';
let b = a; //Less Specific
b = true;
let c = a; // More specific
let d = 'world';
let e = 'world'; //This angular bracket can not be used in tsx file (ts file with react)
const addorConcate = (a, b, c) => {
    if (c == 'add') {
        return a + b;
    }
    else {
        return '' + a + b;
    }
};
let myval = addorConcate(2, 2, 'concate');
//Be careful : TS sees no problem - but a string is returned 
let next = addorConcate(2, 2, 'concate');
10; //Double casting
//DOM Module 
const img = document.querySelector('img');
const img2 = document.getElementById('img'); // just giving ! it means to tell this is a not null property 
const img3 = document.getElementById('img'); //Same as above but this will not work in tsx file
img.src;
img2.src;
img3.src;
export {};
//# sourceMappingURL=typeassertion.js.map