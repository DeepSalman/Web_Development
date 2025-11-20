//Method 1
let user:{name:string;age:number}={
    name:"salman",
    age:22,
};


//Method 2
//use ?- property to indicate this may or may not exist
let user1:{name:string;age?:number}={
    name:"Farsi",
    
};

//Method 3: Alias
type User2 = {
    name:string,
    age:number,
    email?:string,
};

const u1: User2={
    name:"salman",
    age:22,

};



//Method 4: :Type aliases with arrays
type User3 ={
    id: number,
    title: string,
    price: number;
};

let user3:User3[]=[
    {id:1,title:"laptop",price:5000},
];



//Nested Objects
type Address = {
    city: string,
    country:string,
}

type Person ={
    name:string,
    address:Address,


}

const user4:Person={
    name: "salman",
    address:{city:"dhaka",country:"Bangladesh"}
}