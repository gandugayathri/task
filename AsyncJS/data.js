async function fetchUserData()
{
    try{
        let response=await fetch(`https://jsonplaceholder.typicode.com/users`)
        let data= await response.json();

        let userDataDiv=document.getElementById('user-data');
        data.forEach(user => {
            let userDiv=document.createElement('div');
            userDiv.innerHTML=`Name: ${user.name}, Email :${user.email}`;
            userDataDiv.appendChild(userDiv);
            
        });
    }

    catch(error){
console.error(`Error in fecthing data`)
    }

}

fetchUserData()