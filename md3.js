//synchronous or blocking
// line by line execution

//asychronous or non blocking
// -line by line execution is not guaranteed
// -call back funtion is require to fire
const fs = require("fs");
fs.readFile("gd.txt","utf-8",(err , data)=>{
    console.log(data);
});
console.log("this is the message for you");
