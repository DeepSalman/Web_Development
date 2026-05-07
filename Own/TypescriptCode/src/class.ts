


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