//Generics = Templates for types

// React + TypeScript
// TanStack Query
// API wrappers
// Utility functions
// Data structures


//Basic function: 
function identity(x:number,y:number): number{
    return x+y;
}

//Basic generic function 
//In here : T means any type caller will provide !
//Like a place holder
function identity1<T>(value:T): T{
    return value;
}

identity1<number>(10);
identity1<string>("Hello");
identity1<boolean>(true);

identity1<{name:string}>({name:"salman"})


//Generics with arrow function
const wrap = <T>(value: T): T[] => {
  return [value];
};

wrap(10);       // number[]
wrap("abc");    // string[]
wrap({a:1});    // object[]


