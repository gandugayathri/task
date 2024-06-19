function fetchData(callback,timeout)
{
    setTimeout(() => {
        console.log(`Data fetched`);
        callback();
    }, timeout);
}

console.log(`start`);

//function dis() {
   // console.log(`callback excuted`);
//}
//fetchData(dis,2000);
fetchData(()=>{ console.log(`callback excuted`)},2000);