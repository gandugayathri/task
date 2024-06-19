function fetchData(){


    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            const success=true;
            if(success){
                resolve(`Data fetched`);

            }else{
                reject(`Error fecthig data`);

            }
            
        }, 2000);


    });
}

fetchData().then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);});

