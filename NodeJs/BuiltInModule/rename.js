const fs = require('fs');

fs.rename('NodeJs/BuiltInModule/write.txt','renamed.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successful");
    }
})