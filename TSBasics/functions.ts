//Method 1
function add(a:number,b:number): number{
    return a+b;
}

//Method 2: arrow functions 
const multiply = (x:number,y:number): number => {
    return x*y;
}

//Method 3: Void Functions
function logMessage(msg:string): void {
    console.log(msg);
}

//Method 4:Optional parameters
function great(name?:string,): string{
    return name? 'hello,$(name)':"hello!";
}


//Method 5 : Default parameters
function power(base: number, exp: number = 2): number {
  return base ** exp;
}

//****
//Method 6: Function type aliases
type sum = (a:number,b:number) => number;
const s: sum=(x,y)=>x+y;
// React components use function types.
// Event handlers use function types.
// API functions use function types.
// TanStack Query callbacks use function types.
// Utility functions use them everywhere.





//Method 8:
//A function that never returns (infinite loop, always throws):
function fail(msg: string): never {
  throw new Error(msg);
}






