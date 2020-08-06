const cp = require("child_process");

//cp.exec("open https://www.google.com");

//cp.exec("open -a Terminal .");

// cp.exec("ls", (err, data) =>{
//     if(err){
//         throw err;
//     }
//     console.log(data);
// });

cp.exec("node readStream", (err, data) =>{
    if(err){
        throw err;
    }
    console.log(data);
});