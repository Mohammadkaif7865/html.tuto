const fs =require("fs");
let text = fs.readFileSync("gd.txt","utf-8");
text = text.replace("shanky", "aesthatic");

console.log("the content of file is: ");
console.log(text);
console.log("creating new file ....");
fs.writeFileSync("monu.txt",text);
