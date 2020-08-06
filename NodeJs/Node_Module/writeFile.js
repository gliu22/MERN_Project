const fs = require("fs");

const md = `
#This is new File

should be line 11?

no, this is line 15
haha can you count line 16

skiped line 17 and now line 18
`;

fs.writeFile("./assets/nodes.md", md.trim(),err=>{
    if(err){
        throw err;
    }

    console.log("file saved");
});