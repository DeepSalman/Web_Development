class coder {
    constructor(name, roll, age, semester, status) {
        this.name = name;
        this.roll = roll;
        this.age = age;
        this.semester = semester;
        this.status = status;
    }
}
class coder_visibility_modifiers {
    constructor(name, roll, age, semester, status) {
        this.name = name;
        this.roll = roll;
        this.age = age;
        this.semester = semester;
        this.status = status;
        this.name = name;
        this.roll = roll;
        this.age = age;
        this.semester = semester;
        this.status = status;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
    getStatus() {
        return `Status is ${this.status}`;
    }
}
const Salman = new coder_visibility_modifiers('salman', 112430508, 23, '5th', true);
console.log(Salman.name);
// console.log(Salman.age) This wont work because this is private property
// console.log(Salman.status) this also dont work because this is a protected property
Salman.getAge();
export {};
//# sourceMappingURL=class.js.map