//console.log(__dirname);

const path = require('path');

//Finding the extension of the file 
const extentionName = path.extname('indx.html')
console.log(extentionName)

//Joining links 
const joinName = path.join(__dirname+"/views")
console.log(joinName)

