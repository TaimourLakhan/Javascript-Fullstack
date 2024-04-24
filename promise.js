function saveDb(){
    return new Promise((resolve, reject) => {
        let speed=Math.floor(Math.random()*10)+1;
        if(speed>4){
            resolve("your problem is resolved");
        }else{
            reject("your problem is rejected");
        }
    })
}

saveDb().then((result)=>{
    console.log("problem is solved");
    console.log("result is " , result);
    return saveDb();
}) .then((result)=>{
    console.log("problem 2 is solved");
    console.log("result is " , result);
}).catch((error)=>{
    console.log("problem is rejected");
    console.log(error);
})