//Narrowing With type of 
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // TS knows id is string
  } else {
    console.log(id.toFixed(2));    // TS knows id is number
  }
}

//Narrowing with instance off 
class User {
  name: string;
  constructor(name: string) { this.name = name; }
}

class Admin {
  role: string;
  constructor(role: string) { this.role = role; }
}

function printInfo(obj: User | Admin) {
  if (obj instanceof User) {
    console.log("User:", obj.name);
  } else {
    console.log("Admin:", obj.role);
  }
}


//Narrowing with in 
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim();
  } else {
    animal.fly();
  }
}


//Custom Type guards
type Cat = { meow: () => void };
type Dog = { bark: () => void };

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).meow !== undefined;
}

function makeSound(animal: Cat | Dog) {
  if (isCat(animal)) {
    animal.meow();
  } else {
    animal.bark();
  }
}


//Narrowing with literal types
type Status = "loading" | "success" | "error";

function handle(status: Status) {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Done!");
  } else {
    console.log("Error!");
  }
}

