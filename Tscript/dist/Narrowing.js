"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Narrowing With type of 
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase()); // TS knows id is string
    }
    else {
        console.log(id.toFixed(2)); // TS knows id is number
    }
}
//Narrowing with instance off 
class User {
    name;
    constructor(name) { this.name = name; }
}
class Admin {
    role;
    constructor(role) { this.role = role; }
}
function printInfo(obj) {
    if (obj instanceof User) {
        console.log("User:", obj.name);
    }
    else {
        console.log("Admin:", obj.role);
    }
}
function move(animal) {
    if ("swim" in animal) {
        animal.swim();
    }
    else {
        animal.fly();
    }
}
function isCat(animal) {
    return animal.meow !== undefined;
}
function makeSound(animal) {
    if (isCat(animal)) {
        animal.meow();
    }
    else {
        animal.bark();
    }
}
function handle(status) {
    if (status === "loading") {
        console.log("Loading...");
    }
    else if (status === "success") {
        console.log("Done!");
    }
    else {
        console.log("Error!");
    }
}
//# sourceMappingURL=Narrowing.js.map