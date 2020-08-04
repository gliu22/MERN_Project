const fs = require("fs");

if(fs.existsSync("storage-files")){
    console.log("directory existed");
}else{
    fs.mkdir("storage-files", error => {
        if(error){
            throw error;
        }
    
        console.log("directory created");
    });
}

