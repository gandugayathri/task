function fetchData(callback,timeout)
{
  return new Promise((resolve,reject)=>
    {

        setTimeout(() => {
            console.log(`Data fetched`);
        }, 2000);

    });
  
}

async function fetchDataAsync(){

    console.log(`start`);

    try{
        let data= await fetchData();
        console.log(data);
    }
    catch(error){
       console.error(error);
    }

    console.log(`end`);

}

fetchDataAsync();