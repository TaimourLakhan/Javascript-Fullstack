// call stackc work on stack datastructure algorithum lifo last come first out method 
// when we calling the function there call strore on stack 


// CALL BACK STACK IS SIMPLE 


// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function three(){
//     let ans= two()+one();
//     console.log(ans);
// }

// three(); // this will print 3 



// BREAK POINSTS 

// if we want to track our call stack then go to browser window besude console tab go to source open js file and set the break point line and execute then it will open debugger pannel just next step and see the callback stack how it goes generally we use it in complex function who these lines works 


// GO TO SOURCES AND SET THE BREAK POINTS TO TRACK THE FUNCTION CALLSTACK HOW IT WORKS 


// JS IS SINGLE THREADED LANGUAGE 

// single threaded mean one task at single time 

// when we make request for data to api then it takes time so js is single threaded and just wait for this we use callback function for our execution or when database tak time to store data which it take from js then call back execute some peace of code 

// JS IS SINLE THREADED BUT THESE FUNCTIONS  like 

// setTimeout(function(){
//     console.log('hello taimour');
// },2000);

// it will execute after some time while js code is runnig as js is single threaded but this function execute by browser 

// browser written in c++ and java which is multi threaded language js is single one line at a time 

// js works synoschrous one code at a time but for this browser take responsibilty of wait as browser written in c++ it take wait responsibility and js code running after time interval browser push the function call into js stack and js execute the stack call it cannot take hold (wait )

// this nature of javascript is a synchronous nature 

// CALLBACK HELL 

// callback hell mean nested callbacks in asyncronous function which make code like pyramid of doom to organize code in a decent manner 


// let h1 = document.querySelector('h1');

// h1.style.color='red';

// setTimeout(function(){
//     h1.style.color='red';
// },1000);
// setTimeout(function(){
//     h1.style.color='orange';
// },2000);
// setTimeout(function(){
//     h1.style.color='blue';
// },3000);


// now try to make it easy use function and pass callback 

// function changeColor(color){   // this is not asyncronous function it just print blue the last one 
//     h1.style.color=color;
// }


// setTimeout(changeColor('red'),1000);
// setTimeout(changeColor('orange'),2000);
// setTimeout(changeColor('blue'),3000);


// to make all these asyncronous we add setimout in the function 


// function changeColor(color,delay,nextColor){
//     setTimeout(()=>{
//         h1.style.color=color;
//         nextColor();
//     },delay);

// }

// changeColor('red',1000);
// changeColor('yellow',2000);
// changeColor('blue',3000); // this is not the proper tareka to execute we must care that execute complete first then go other if errror in first then not execute 

// callback hell is the nesting of callback to execute same peacce of code we we tack with api for data fetch and working with databse to store the data 


// now callback hell nesting of the callbacks 

// changeColor('red',1000,()=>{
//     changeColor('orange',1000,()=>{
//         changeColor('yellow',1000,()=>{
//             changeColor('blue',1000,()=>{
//                 changeColor('green',1000);
//             })
//         })
//     })
// })

// the above peace of code is callback hell nesting of callbacks to avoid this in js we use promises and asyc await 

// PROMISES IN JS 

// function saveTodb( sucess, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         sucess();
//     } else {
//         // console.log("weak connection of internet")
//         failure();
//     }
// }

// saveTodb(
//     () => {
//         console.log(" sucess :your data is saved :");
//         saveTodb(()=>{
//             console.log("sucessuly sacved another");
//         },
//         ()=>{
//             console.log("failure : data not saved");
//             saveTodb(()=>{
//                 console.log("again sucessfully data saved");
//             },()=>{
//                 console.log("data is not saved");
//             })
//         })
//     }, () => {
//         console.log(" failure :sorry weak connection");
//     }
// )


// now the above situation is the callback hell situation in this situation we used promises it is the object that take responisibility of execution of this peace of code it may fail or pass 

// eventual completion or failure of an asyncronous operation and resulting values 

// promise object have resolve and reject property resolve mean completion and reject mean failure 


// function saveTodb( data) {
//     // let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;

//         if(internetSpeed > 4){
//             resolve("taimour data was saved");
//         }else{
//             reject("alert failure occure rejected");
//         }



//     })
// }


// saveTodb("taimour lakhan"); // this will return a promise which is resolve or reject and its resulting values

// then() and catch() method in promise because promise is an object 
// then method is used when promise if fullfiled and catch method is used when promise is rejected 


// saveTodb().then(()=>{
//     console.log("promise was resolved");
// })
// .catch(()=>{
//     console.log("promise was rejected");
// })


// now promise channing if one sucess then other only once catch used like try and catch then use if sucess 

// saveTodb().then(()=>{
//     console.log("your data1 is saved");
//     return saveTodb(); // this will again call original asyn func on this again used then
// })
// .then(()=>{
//     console.log("congratulations data 2 is saved");
//     return saveTodb();
// })
// .then(()=>{
//     console.log("congratulations data 3 is saved");
// })
// .catch(()=>{
//     console.log("failure data is not saved");
// })

// THE ABOVE SENARIO IS THE PROMISE CHANNING IN THE ASYN JS 

// now if we want result and error why our function fail or pass then we pass result and error parameters to the then and catch method 


// saveTodb().then((result)=>{
//     console.log("your data1 is saved");
//     console.log(result);
//     return saveTodb(); // this will again call original asyn func on this again used then
// })
// .then((result)=>{
//     console.log("congratulations data 2 is saved");
//     console.log(result);
//     return saveTodb();
// })
// .then((result)=>{
//     console.log("congratulations data 3 is saved");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("failure data is not saved");
//     console.log(error);
// })


// Lets apply promises to our callback hell  to our color code function

// let h1 = document.querySelector('h1');


// function changeColor(color, delay) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("good color is chanaging");
//         }, delay);

//     })


// }

// changeColor('red',1000).then(()=>{
//     console.log("red color is appered");
//     return changeColor('yellow',1000);
// }).then(()=>{
//     console.log("yellow color is appeard");
//     return changeColor('orange',1000);
// }).then(()=>{
//     console.log("orange color is appear");
//     return changeColor('green',1000)
// }) 





























