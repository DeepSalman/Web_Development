type stringOrNumber = (string | Number)
type stringorNumberArray=(string|Number)[]

type guitarist = {
    name?:string,
    active:boolean,
    album:stringorNumberArray,
}

//NB: we can not do these with interfaces

let myName:number = 31
let yourName:'salman'| 'rachel' | 'ammy'
yourName='salman'
yourName='ammy'
yourName='rachel'


//---------functions---------\\

const add = (a:number,b:number)=>{
    return a+b
}

const logMsg = (Message:any)=>{
    console.log(Message)
}

const repMsg = (Message:any):void=>{
    console.log(Message)
}

let subtract = function(c:number,d:number):number{
    return c-d
}

type mathfunction = (a:number,b:number)=>number
let multiply: mathfunction = function(c,d){
    return c*d
}

let subtract2:mathfunction = (a,b):number=>{
    return a-b;
}
let subtract3:mathfunction=function(a,b){
    return a-b
}


multiply(1,2)


interface anotherMathFunction {
    (a:number,b:number):number
}



///Optional parameters

const addAll = (a:number,b:number,c?:number):number =>{
    if(typeof c !== 'undefined'){ //This is type gard 
        return a+b+c
    }
    return a + b
}

const SumAll=(a:number,b:number,c:number=2):number=>{
    if(typeof c !== 'undefined'){
        return a+b+c
    }
    return a+b
}

SumAll(2,3) // We dont have to pass the value of c because c is already defined
SumAll(3,4,undefined) //we can also say undefined as it it present already



///Rest parameters
const total = (...nums:number[]):number =>{
    return nums.reduce((prev,curr) => prev + curr)
}


// Never Type

const createError = (errmsg:string):never=>{
    throw new Error(errmsg)
}

const infinite = ()=>{
    let i:number =1;
    while(true){
        i++;
        if(i>100) break
    }
}

const numberorstring=(value:number|string):string =>{
    if(typeof value === 'string'){
        return 'string'
    }
    if(typeof value === 'number'){
        return 'number'
    }
    return createError('this should never happen') // we must have specific return because it fears an undefined state or situation

}
///Custom type gard
const isNumber =(value:any):boolean=>{
    return typeof value === 'number'
        ? true:false
}