// // // // Events are signals that something happen in dom 

// // // // inline events that we use inside the html element like onclick then we post whta happen then 

// // // // MOUSE EVENTS 

// // // let btns=document.querySelectorAll("button");
// // 
// // // // console.dir(btn);

// // // // function sayhello(){
// // // //     alert("you clicked the button"); // this function will execute when button was clicked
// // // //     console.log("ok you clicked");
// // // // }

// // // // for(btns of btns){
// // // //     btns.onclick=sayhello;
// // // //     btns.onmouseenter=function(){
// // // //         console.log("you hover the btn");
// // // //     }
    
// // // // }


// // // // if we click and hover it just execute single event  if we want to execute multiple property then we should use addEventListener  the only diffrence between it it just reload the callback dynamically then onclick 

// // // // if we want to execute multiple functions on one event then use event listner 


// // // function sayhello(){
// // //     alert("hey taimour");
// // // }

// // // function sayname(){
// // //     console.log("hey taimour");
// // // }

// // // for(btns of btns){
// // //     // btns.addEventListener('click',sayhello);
// // //     // btns.addEventListener('click',sayname);
// // //     // btns.addEventListener('dblclick',function(){
// // //     //     console.log("you double click it taimour");
// // //     // });
// // //     // btns.addEventListener('mouseenter',function(){
// // //     //     console.log("you enter it taimour");
// // //     // });


// // //     btns.addEventListener('mouseleave',function(){
// // //         console.log("you leave the mouse   taimour");
// // //     });
// // // }
    




// // // THIS IS THE ACTIVITY THAT WE WILL PERFORM TO UTILIZE THE EVENTS 


// // // let btn=document.querySelector("button");


// // // // now making funciton of random color 

// // // function randomColor(){
// // //     let red = Math.floor((Math.random()) * 255);
// // //     let green = Math.floor((Math.random()) * 255);
// // //     let blue = Math.floor((Math.random()) * 255);

// // //     let color=`rgb ${red},${green},${blue}`;
// // //     return color;
// // // }



// // // btn.addEventListener("click",function(){
// // //     // console.log("genrate random coloe");

// // //     let h3=document.querySelector("h3");

// // //     let random_color=randomColor();
// // //     h3.innerText=random_color;

// // //     // now selecting the div 

// // //     let div=document.querySelector(".div");
// // //     div.style.backgroundColor=random_color;
// // //     div.style.color=random_color;

    

// // //     try{
// // //         console.log("is it error")
// // //     } catch(error){
// // //         console.log(error);
// // //     }

// // //     console.log("color updated");
    
    
    
// // // })


// // // THIS IN EVENT LISTNER 


// // // when we use this in event listerner callback it refer the element object on which event apply this access other properties of the object in callback 


// // // let btn=document.querySelector("button");

// // // btn.addEventListener("click",function(){
// // //     console.dir(this); // this refer to the object in this case it will print the object on which event apply

// // //     // by using this we can acess many properties of this object like that 

// // //     console.log(this.innerText);
// // //     this.style.backgroundColor="blue";
// // // })

// // // in this way we can use this 

// // // KEYBOARD EVENTS IN JS 

// // // there is bydefault event in callback 

// // // let btn=document.querySelector("button");

// // // // btn.addEventListener("click",function(event){
// // // //     console.log("button clicked");
// // // //     console.log(event);  // this will give us the information about event type of event and many other properties 
// // // // })


// // // let inp=document.querySelector("input");

// // // keyboard event 

// // // inp.addEventListener("keydown",function(event){
// // //     console.log("key is pressed"); // this will execute when key is press instantly

// // //     // console.log(event);
// // //     console.log("key"=event.key);
// // //     console.log("code"=event.code);
// // // })


// // // inp.addEventListener("keyup",function(){
// // //     console.log("leave the key"); // this will execute when key leave instantly
// // // })


// // // now making the tekken game like key 


// // // inp.addEventListener("keydown",function(event){

// // //     // console.log(event);
// // //     // console.log('key is pressed');
// // //     // console.log('key =',event.key);
// // //     console.log('code =',event.code);

// // //     // making the game 

// // //     if(event.code=="ArrowUp"){
// // //         console.log('jumping the player up');
// // //     }else if (event.code=="ArrowDown"){
// // //         console.log("lay down the player");
// // //     }else{
// // //         console.log('press any key')
// // //     }

    
    
// // // })


// // // FORM EVENTS

// // // selection element 


// // // let form=document.querySelector('form');


// // // form.addEventListener('submit',function(event){
// // //     event.preventDefault(); // this will terminate the action to go action window when form submited
// // //     console.log('form submitted');

// // //     // now we will learn how to extracting data from form using event 


// // //     let user=this.elements[0];
// // //     let pass=this.elements[1];

// // //     // in input value is like the innner text 
// // //     // this here refer to the object 

// // //     console.log(user.value);
// // //     console.log(pass.value);
// // //     console.log(`your username is ${user.value} and your password is ${pass.value}`);
// // // })


// // // OTHER TYPE OF EVENTS 

// // // CHANGE EVENT 

// // // change event occue when the value of element is change it only work on input textaria select elemment 

// // // form.addEventListener('submit',function(event){
// // //     event.preventDefault();
// // // })

// // // let user=document.querySelector(".user");

// // // user.addEventListener('change',function(){
// // //     console.log('change event');
// // //     console.log("your value is changed now it is =",user.value); 
// // //     // change event occure only intital and after final call if we want to occure after enter every element change then use input event 


// // // })

// // // // now use input event it is also use for input textaria and 

// // // user.addEventListener('input',function(){
// // //     console.log('input event'); // this will trigeered after every element enter
// // //     console.log(user.value);
// // // })


// // // let p=document.querySelector("p");

// // // user.addEventListener('input',function(){
// // //     console.log(user.value);
// // //     p.innerText=user.value;
// // // })


// // // Practise questions 


// // // using the mouseout event create the list item and appen it to the ul 


// // let btn =document.querySelector("button");
// // let nav=document.querySelector("div");
// // let inp=document.querySelector("input");




// // // inp.addEventListener('keypress',function(){
// // //     let li=document.createElement("li");
// // //     li.innerText="item 2";

// // //     nav.append(li);

    
// // // })

// // // now scroll event 

// // // window.addEventListener('scroll',function(){
// // //     let btn2=document.createElement("button");
// // //     // btn2.classList.add('buttons');
// // //     btn2.innerText='taimour';
// // //     // console.dir(btn2);
// // //     // btn2.insertAdjacentElement("afterbegin",nav);
// // //     nav.append(btn2);
// // //     console.log("scrolling");
// // // })

// // // inp.addEventListener('keypress',function(){
// // //     li.remove();
// // // })


// // // load event 

// // // window.addEventListener('load',function(){
// // //     console.log("loading in load");  // this will execute when totally all css and external files were loaded
// // // })

// // // window.addEventListener('DOMContentLoaded',function(){
// // //     console.log("dom content loading"); // this will execute fast before external files loaded
// // // })


// // // Q#2

// // // create button and apply click event on it 

// // // let btn2=document.createElement("button");
// // // btn2.innerText="taimour";

// // // nav.append(btn2);

// // // btn2.addEventListener('click',function(){
// // //     btn2.style.backgroundColor='red';
// // //     btn2.style.color='yellow';
// // // })


// Q#3

// let h1=document.querySelector("h1");


// inp.addEventListener('input',function(event){

//     // console.log(event.value);
//     h1.innerText=inp.value;



// })





















