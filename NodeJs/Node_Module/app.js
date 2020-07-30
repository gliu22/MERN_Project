// const name = require("./myModule");

// name.inc();
// name.inc();
// name.inc();

// console.log(name.getCount());

//OR 

const {inc, dec, getCount} = require("./myModule");

inc();
inc();
inc();

console.log(getCount());