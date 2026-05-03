let stringArray = ['one','hey','Dave'];
let guiters = ['strat','les paul',5150];
let mixedData = ['EVH',1984,'true'];

stringArray[0]='john';
// stringArray[1]=21; This is going to be a problem ;
// stringArray.push(32);
stringArray[0]='32';

guiters[0]=32; //There will be no flags because it is an union type which only accepts strings and numbers
guiters.unshift('jim'); // unshift is used to insert an element in the very beginning 
// guiters.unshift(true) we can not assign true because in guitters there is only 2 types 

// stringArray = guiters because stringarray is only string type 
guiters = stringArray // This will run because guiters can take both types
mixedData = guiters // this will also work

let test = [] // this will be assigned as any type array ;
let bands: string[] = [];
bands.push('hello');


//------------Tuples-----------------\\

let mytuple:[string,number,boolean] = ['Dave',42,true]
mytuple[0]='john';
mytuple[1]=20;
mytuple[2]=false;


//------------Object-----------------\\

let myobj: object
myobj = []
console.log(typeof myobj)

const exampleObj = {
    prop1:'Dave',
    prop2:true,
}

exampleObj.prop1='salman';
exampleObj.prop2=false;



type guitarist = {
    name:string,
    active:boolean,
    album:(string|number)[],
}

let evh: guitarist = {
    name:'eddit',
    active:false,
    album:['1984',32],
}

let JP: guitarist = {
    name:'jimmy',
    active:true,
    album:['1984',32,'hello'],
}

// evh = JP we can definitely do this thing
JP.name='hamilton' // we can certainly do this 

const greetguitarist = (Guitarist:guitarist) =>{
    return `hello ${Guitarist.name}!`
}

//We will learn later about when we should use interface or Type alias 
interface Artist {
    name:string,
    active?:boolean,
    album:(string|number)[],
}


//------------Enums-----------------\\


enum Grade {
    U=1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U)