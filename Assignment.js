var x=1;
var y=2;
console.log(x,y);
//blocked scope
{
    var x=10;
    var y=20;
    console.log(x);
    console.log(y);
}
console.log(x,y);
//const 
const pie =22.7;
console.log(pie);
{
// pie =22.5 error
console.log(pie);
}