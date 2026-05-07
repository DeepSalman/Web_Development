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
///Extend a Class
class WebDev extends coder_visibility_modifiers {
    constructor(
    // 1. Include parent properties in the child constructor
    name, roll, age, semester, status, 
    // 2. 'public' here automatically creates this.computer = computer
    computer) {
        // 3. Pass values directly, NOT using 'this'
        super(name, roll, age, semester, status);
        this.computer = computer;
        // No need for this.computer = computer; TypeScript does it for you!
    }
}
// Now you must provide all required values when creating the instance
const Sera = new WebDev('Sera', 101, 22, '4th', true, 'mac');
Sera.getAge();
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} `;
    }
}
export {};
//# sourceMappingURL=class.js.map