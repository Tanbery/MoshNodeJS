//function(exports,require,moudle,__filename,__dirname)
var url = "http://mylogger.io/log";

function log(message ){
    //send HTTP Request
    console.log("Logger:"+ message);
    console.log("Filename   ==>"+ __filename);
    console.log("Dirname    ==>"+ __dirname);
}

module.exports.log = log; //export module 
//module.exports = log; //export just function 


