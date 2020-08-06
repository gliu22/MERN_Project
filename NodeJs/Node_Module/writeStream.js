const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myFile.txt","UTF-8");

// writeStream.write("Hello");
// writeStream.write(" World\n");

// process.stdin.pipe(writeStream);
// const readSteam = fs.createReadStream("./assets/Readme.md","UTF-8");
// readSteam.on("data", data =>{
//     writeStream.write(data);
// });

const readSteam = fs.createReadStream("./assets/Readme.md","UTF-8");
readSteam.pipe(writeStream);