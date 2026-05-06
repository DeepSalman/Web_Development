type One = string
type Two = string|number|boolean
type Three = 'hello'

//Convert to more or less specific 
let a: One = 'hello'
let b=a as Two //Less Specific
b=true
let c = a as Three // More specific
let d=<One> 'world'
let e=<string|number> 'world' //This angular bracket can not be used in tsx file (ts file with react)

const addorConcate = (a:number,b:number,c:'add'|'concate'):number|string=>{
    if(c=='add'){
        return a+b
    }
    else{
        return ''+a+b
    }
}

let myval: string = addorConcate(2,2,'concate') as string

//Be careful : TS sees no problem - but a string is returned 
let next: number = addorConcate(2,2,'concate') as number 


(10 as unknown) as string //Double casting

//DOM Module 

const img = document.querySelector('img') as HTMLImageElement
const img2 = document.getElementById('img') as HTMLImageElement // just giving ! it means to tell this is a not null property 
const img3 = <HTMLImageElement>document.getElementById('img') //Same as above but this will not work in tsx file
img.src 
img2.src 
img3.src




