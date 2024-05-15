// here i will solve the prctise question of function related 

let h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((sucess)=>{
        setTimeout(()=>{
            h1.style.color=color;
            sucess();
        },delay)
    })
}

let request=changeColor();

request.then(()=>{
    changeColor("red",1000);
    return changeColor();
}).then(()=>{
    changeColor("yellow");
    return changeColor();
})