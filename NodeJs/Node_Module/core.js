/* Path module example */
const path = require("path");

const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

//console.log(dirUploads);

/* Util module example */
const util = require("util");

//util.log(path.basename(__filename));
//util.log(" ^ Name of current file");

/* v8 module example */
const v8 = require("v8");
util.log(v8.getHeapCodeStatistics());