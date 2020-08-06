const fs = require("fs");

fs.renameSync("./assets/colors.json", "./assets/colorsData.json");

fs.rename("./assets/nodes.md","./storage-files/nodes.md", err=>{
    if(err){
        throw err;
    }
});

setTimeout(()=>{
    fs.unlinkSync("./assets/BiXDFDDp_400x400.jpg");
} , 4000);