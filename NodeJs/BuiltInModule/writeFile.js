const fs = require('fs');

fs.writeFile('NodeJs/BuiltInModule/write.txt',"My name is salman ",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfull!");
    }
})