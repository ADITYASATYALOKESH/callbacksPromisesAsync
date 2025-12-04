const getUserDetails=(userId)=>{
    return new Promise(
        (reslove,reject)=>{
            reslove({userRoll:13})
        }
    )
}
const getUserDiet=(userRoll)=>{
    return new Promise(
        (resolve,reject)=>{
            resolve({DietId:20})
        }
    )
}
const getDietMenu=(DietId)=>{
    return new Promise(
        (resolve,reject)=>{
            resolve({diet:200})
        }
    )
}
getUserDetails(81).then(
    (result)=>{
        return getUserDiet(result.userRoll);
    }
).then((result)=>{
    return getDietMenu(result.DietId);
}).then((result)=>{
    console.log(result.diet);
})
.catch((error)=>console.log(error))
