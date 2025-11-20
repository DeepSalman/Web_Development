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


//Generic type aliases
type ApiResponse<T>={
  success: boolean,
  data:T,

};

const UserRes: ApiResponse<string[]>={
  success:true,
  data:['Salman','farsi']
}


//Generics with interface:
interface Box<T>{
  item:T;
}

const numBox: Box<number>={item:10};
const strBox: Box<string>={item:"Hello"}




///Generic Constrains :
//You can force T to be only certain kinds of types

//Example: T must be an object with a name property 
function printName<T extends {name:string}>(object:T){
  console.log(object.name);
}

printName({name:"salman",age:20})




//Generics in tanstack query 
// type User{
//   id:number,
//   name:string,
// }

// const query = useQuery<User>({
//   queryKey: ["users"],
//   queryFn: async () =>
//     fetch("/api/user").then((res) => res.json()),
// });


//Real example:

type Pair<A,B> ={
  first:A,
  second:B,
};

const p1:Pair<string,number>={
  first:"Salman",
  second:4,
};