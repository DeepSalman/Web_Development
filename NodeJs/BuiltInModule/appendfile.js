const fs = require('fs');

fs.appendFile('NodeJs/BuiltInModule/write.txt',"My name is salman ",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfull!");
    }
})