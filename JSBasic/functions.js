//Declaring Normal function
function wtfisthis(){
    this;
}


//Function under a class
const person = {
    wtfisthis : function (){
        console.log(this);
    }
}



//Binding a function with a certain Object
function wtfIsThis(){
    console.log(this);
}
const Person={}

const personFun = wtfIsThis.bind(Person)


