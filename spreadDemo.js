let colors=["blue","black"]
//usage of spread operator
//concatenating arrays
let newcolors=[...colors,"green","orange","white"]
console.log(newcolors)

//copy

let moderncolors=[...newcolors]
console.log(moderncolors)

let str=['a',...'eio','u']
console.log(str)

function sum(x,y,z)
{
    return x+y+z;
}
const nums=[1,2,3];
console.log(sum(...nums)); 


