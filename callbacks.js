const getUserDetails=(id,getUserDiet)=>{
    console.log("Get user Details with",id);
    getUserDiet();

}
const getUserDiet=(age,getDietMenu)=>{
    console.log("Get user Diet according to age",age);
    getDietMenu(dietId=21);
}
const getDietMenu=(dietId)=>{
    console.log("Get Diet Menu with dietId :",dietId);
}
getUserDetails(
    id=10,function(){
        getUserDiet(10,function(dietId){
            getDietMenu(dietId)
        })
    }
);