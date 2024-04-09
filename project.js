// To avoid event bubling we used stop propagation 
// event.stopPropagation

// Making todo list 

let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let li=document.querySelector("li");






btn.addEventListener('click',function(){
    let lip=document.createElement('li');
    lip.innerText=inp.value;
    ul.appendChild(lip);
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    lip.appendChild(delbtn);
    inp.value="";

    // console.log(lip);


})

// let delbtns=document.querySelectorAll(".delete");

// for(delbt of delbtns){
//     delbt.addEventListener('click',function(){
//         let par =this.parentElement; // use navigation on page concept
//         par.remove();
//         console.log(this.par);
//     })
// }


// the above will work only already existing elment now use event delgation like stop propagation concept


// if we want to execute the the event on new create child it will not work it is event delegation we should apply event on parent element for this 


ul.addEventListener('click',function(event){
    // console.dir(event.target);

    if(event.target.nodeName=='BUTTON'){
        let par=event.target.parentElement;
        par.remove();
    }else{
        console.log("nothing")
    }
})


