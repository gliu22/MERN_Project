const fs = require("fs");

const readStream = fs.createReadStream("./assets/Readme.md","UTF-8")

let fileText = "";
console.log("Type somthing...");
readStream.on("data",data=>{
    console.log(`I read ${data.length - 1} characters of text`);
    fileText += data;
});

readStream.once("data", data=>{
    console.log(data);
});

readStream.on("end", data=>{
    console.log("end reading");
    console.log(`end read ${fileText.length - 1} characters of text`);
});