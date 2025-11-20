//Method 1
interface User1 {
  name: string;
  age: number;
}

const u: User1 = {
  name: "Salman",
  age: 22,
};

//Method 2: Optional property 
interface Student {
  name: string;
  gpa?: number;
}

const u2:Student={
    name:"rayhan",
}


//Method 3: Readonly properties
//Model can not be changed after creation
interface Car {
  readonly model: string;
  year: number;
}


//Method 4: Extended Interfaces
interface user3 {
    name:string,
    age:number,
}

interface Employee extends user3{
    salary:number,
}

const employee1: Employee={
    name:"Salman",
    age:20,
    salary:3000
};




//Method 6: Interfaces in react




