//let declartion and intialization
let x=1;
let name="sreeja";
var y=1;
console.log("x is",x);
console.log("y is",y);
console.log(typeof(x));
console.log(typeof(name));

//block
//trying to let is block scope
{
    // x=10 ==> it will rewrite the x to 10
 let x=10;
 var y=10;
console.log("with in block scope",x,y);
}

console.log("after block scope",x,y);


//const

const pie=22.7;
console.log(pie);
{
    // pie=22.8; ---> error
    const pie=22.8;
    console.log(pie);
}
console.log(pie);