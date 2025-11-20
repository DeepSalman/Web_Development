//It is safe to say types are better than Interface in most use cases 

/////Extending Interface:
interface Person {
  name: string;
}

interface Student extends Person {
  university: string;
}

const s1: Student = {
  name: "Salman",
  university: "UIU"
};



////Extending Type:
type Person1 = {
  name: string;
};

type Student1 = Person1 & {
  university: string;
};

const s2: Student1 = {
  name: "Sanjid",
  university: "UIU"
};



///Merging Interface 
//Interface can merge automatically 
interface Car {
  brand: string;
}

interface Car {
  model: string;
}

const c: Car = {
  brand: "Toyota",
  model: "Premio"
};
