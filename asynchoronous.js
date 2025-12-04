const delay=()=>{
    return new Promise(
        (resolve,reject)=>{
            setTimeout(
                ()=>{
                    resolve("Completed Fetching data..");
                },2000
            )
        }
    )
}
const getUserDetails=async()=>{
    console.log("Fetching data...");
    const results= await fetch("https://jsonplaceholder.typicode.com/users/1");
    const rs= await results.json();
    await delay().then(
        (result)=>{
            console.log(result);
        }
    );
    return rs;
}
const main=async()=>{
    const results=await getUserDetails();
    console.log(results.name);
    console.log(results.email);
    console.log(results.address.city);
}
main();