function display(...theArgs)
{
    let sum=0;
    for(let i of theArgs)
        {
            sum=sum+i;
        }

        return sum;
}

console.log(display(10,30,40,50)); //130