


class coder{

    name:string
    roll:number
    age:number
    semester:string
    status:boolean

    constructor(name:string,
        roll:number,
        age:number,
        semester:string,
        status:boolean,
    ){
        this.name=name
        this.roll=roll
        this.age=age
        this.semester=semester
        this.status=status
    }


}





class coder_visibility_modifiers{

    secondLang!:string //Like this we can say we are not going to initialize this right now
    constructor(
        public readonly name:string,
        public roll:number,
        private  age:number,
        public semester:string,
        protected status:boolean,
    ){
        this.name=name
        this.roll=roll
        this.age=age
        this.semester=semester
        this.status=status
    }

    public getAge(){
        return `Hello, I'm ${this.age}`
    }
    public getStatus(){
        return `Status is ${this.status}`
    }

    
}

const Salman = new coder_visibility_modifiers('salman',112430508,23,'5th',true)

console.log(Salman.name)
// console.log(Salman.age) This wont work because this is private property
// console.log(Salman.status) this also dont work because this is a protected property
Salman.getAge()



///Extend a Class

class WebDev extends coder_visibility_modifiers {
    constructor(
        // 1. Include parent properties in the child constructor
        name: string,
        roll: number,
        age: number,
        semester: string,
        status: boolean,
        // 2. 'public' here automatically creates this.computer = computer
        public computer: string 
    ) {
        // 3. Pass values directly, NOT using 'this'
        super(name, roll, age, semester, status);
        
        // No need for this.computer = computer; TypeScript does it for you!
    }
}

// Now you must provide all required values when creating the instance
const Sera = new WebDev('Sera', 101, 22, '4th', true, 'mac');

Sera.getAge


