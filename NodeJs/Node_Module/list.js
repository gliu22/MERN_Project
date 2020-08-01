const fs = require("fs");

//sync
const files = fs.readdirSync("./assets");

// async
fs.readdir("./assets",(err, files) => {

    if(err){
        throw err;
    }

    console.log('async');
    console.log(files);
});

//sync
//console.log(files);