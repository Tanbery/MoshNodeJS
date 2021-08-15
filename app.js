const logger = require("./logger")

logger.log("Meesage")

const path = require("path");
var pathObj = path.parse(__filename);
console.log(pathObj);


const fs = require("fs");
// const files = fs.readdirSync("./");
// console.log(files);

const files = fs.readdir(".", function (err, files) {
    if (err) console.log('Error:', err);
    else console.log('Result:', files);
});

