console.log("this is tutorial for funtion");
function greet(name ,greetText=" this is default arguement"){
    let name1 ="manu";
    console.log(greetText +" "+ name)
    console.log(name +"  is a bad boy");
}
function sum(a,b,c)
{ 
    let d = a+b+c;
    return d;
    //console.log("this is a terminating point");
}
let name ="monu";
let name1 ="monu1";
let name3 ="monu3";
let name2 ="monu2";
let name4 ="monu4";
let greetText ="GOOD MORNING";
greet(name1,greetText);
greet(name2,greetText);
greet(name3,greetText);
greet(name4,greetText);
greet(name,greetText);
// let returnval = greet(name3);
let returnval = sum(1,2,3);
console.log( "sum:" + returnval);

// console.log(name +" is a bad boy");
// console.log(name1 +" is a bad boy");
// console.log(name2 +" is a bad boy");
// console.log(name3 +" is a bad boy");
// console.log(name4 +" is a bad boy");