// *-------------Understanding Core Modules--------------*

//required function used to load modules, here we load the path module
const path = require("path");

// Retrieving the file name: core.js
console.log(path.basename(__filename));

//Creating path strings with the path.join function
const dirUploads = path.join(
    __dirname,
    "www",
    "files",
    "uploads"
);

const util = require("util");

const v8 = require("v8");

util.log(dirUploads);

//returns file name and timestamp. util.log function timestamps each log with time and date
util.log(path.basename(__filename)); 

//gives us the memory our app uses
util.log(v8.getHeapStatistics()); 

