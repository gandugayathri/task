let arraySample=["hey","killer","raid","criminal","offense"];
//destructing 
let[str1,str2]=arraySample ;

console.log(str1,str2);

let[str3,str4,...theArgs]=arraySample;
console.log(str3);
console.log(str4);
console.log(theArgs);

let num1,num2;
[num1,num2]=[120,140]; //num1 120 num2 140
console.log("num1",num1,"num2",num2);
[num1=50,num2=100]=[150]; //
console.log("num1",num1);
[num1=50,num2=100]=[,150];
console.log("num2",num2);


let num3=120,num4=150;
[num3,num4]=[num4,num3]

const objNum={
    num5:100,
    num6:99
};
const {num5,num6}=objNum;
console.log(num5)



const student={
    name:'anil',
    grade:'A',
    roll:'89MK908'
}
const{name,grade,roll}=student;
console.log(roll)

let a2,b2;
(
    {a2,b2}={a2:20,b2:30}
)

console.log(a2,b2)

let{p,q,...theArgs2}={p:200,q:300,r:900,z:1000};






