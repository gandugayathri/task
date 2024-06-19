const square=function (params) {
    return params * params;
}
console.log(square(4));

//invoked function expression
(
    function (params) {
        console.log (params * params);
    }
    
)(4);
const square2=(function (params) {
    return params * params;
})(4);

console.log(square2);

// passing function as arugment
function map(f,a)
{

const res=new Array(a.length);

for(let i=0; i<a.length ; i++)
{
res[i]=f(a[i]);
}
return res;

}


const cube=function (x)
{
 return x*x*x;
}


const numbers = [0,1,2,5,10]

console.log(map(cube,numbers))  // [0,1,8,125,1000]

//recursive function 


//function hosting 
console.log(fact(5))  //120

function fact(n)
{
    if(n===0 || n===1)
    {
        return 1;
    }
    else
    {
        return n*fact(n-1);
    }
}
console.log(fact(3)) //6

//function parameters
function mul(param1,param2)
{
    param2 = typeof param2 !== "undefined"? param2:1;
    return param1 * param2;
}

console.log(mul(10));
console.log(mul(10,10));

//default paramter
function mul1(param1,param2=1)
{
    return param1 * param2;
}
console.log(mul1(10));
console.log(mul1(10,10));

//Rest parameters (...) --> will allow you to pass indefinite number of args
function multiply(multiplier, ...theArgs)
{
    return theArgs.map((x)=>multiplier*x);
}
const arr=multiply(2,1,2,3);
const arr2=multiply(2.5,1.9,2.4,3.5);
console.log(arr); //[2,4,6]
console.log(arr2); //[ 4.75, 6, 8.75 ]
// in above example, the function multiply uses rest parameters to collect arguments from 
// the second one to the end. the function then multiplies these by the first argument


//arrow function

const a =["Hydrogen","Helium","Lithium","Neon","Berillium"];
const a2= a.map(function(s)
    {
        return s.length
    });
console.log(a2); //[8,6,7,4,9]
const a3= a.map((s)=>s.length);
console.log(a3); //[8,6,7,4,9]