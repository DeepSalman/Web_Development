const fs = require('fs');

fs.unlink('NodeJs/BuiltInModule/write.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successful");
    }
})