// there are certain level of the game first one is game start second one is blink any button third one is match user sequence and game sequence like that 


// genral declaration 


let gamseq=[]; // initializing game sequence
let userseq=[]; // initializing user sequence

let btns=["yellow","red","purple","green"];

let started=false;

let level=0;

// now for level one press any key to start the game 

// level one 

document.addEventListener('keypress',function(){
    if(started==false){
        console.log("game started");
        started=true;
    }
    console.log("game started");
    levelUp();

})


// level 2

// level up and flash the button 

let h2=document.querySelector("h2");

function gameFlash(randBtn){
    randBtn.classList.add("flash");

    setTimeout(function(){
        randBtn.classList.remove("flash");
    },250);

}

function userFlash(btn1){
    btn1.classList.add("userflash");

    setTimeout(function(){
        btn1.classList.remove("userflash");
    },250);

}

function levelUp(){
    level++;
    h2.innerText=`level ${level}`;
    userseq=[];

    // before button falsh game first choose random button then flash

    let randIdx=Math.floor(Math.random() * 4);
    // console.log(randIdx);
    let randColor=btns[randIdx];
    // console.log(randColor);

    let randBtn=document.querySelector(`.${randColor}`);

    gamseq.push(randColor);
    console.log(`your game sequence is ${gamseq}`);



    gameFlash(randBtn);

}


// // level 3 


function btnPress(){
    let btn1=this;
    userFlash(btn1);
    // console.log(this);

     let userColor=btn1.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    console.log(userseq);
    checkAns(userseq.length-1);

}

let allBtns=document.querySelectorAll(".btn");

for(btn1 of allBtns){
    btn1.addEventListener('click',btnPress);
}


// // level 4   Matching sequence from user and game genrated & reset game


function checkAns(idx){
    // console.log(`current level is ${level}`);

    // let idx=level-1;

    if(gamseq[idx]==userseq[idx]){
        console.log("same value");
        if(userseq.length==gamseq.length){
            setTimeout(levelUp,1000);
            // levelUp();
        }
    }else{
        h2.innerHTML=`GAME OVER ! your score was <b> ${level}</b> <br> Press any key to start again`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';

        },200);
        reset();
    }
}





// level 5 reset function if game over 

function reset(){
    started==false;
    gamseq=[];
    userseq=[];
    level=0;

}


// level 6 display score of the game 



