// ASYNCRONOUS FUNCTION IN JS 

// it return by deafult promise like we add in new promise in syncronous to make it asyncrounous in nature we just use the word async 

// async function greet(){
//     // taimour;
//     return "hello";
// }

// greet(); // it will return promise by default  
// we can use then and catch method on it 

// greet().then((result)=>{
//     console.log("function is sucessfully resolved and result is :",result);
// }) .catch((err)=>{
//     console.log("function is rejected due this this error :",err);
// })

// we can make arrow function async as well 

// let cool= async()=>{return 5; }; // this is asyncrous function that will return the promise 


// Await keyword is used it pauses the execution of its surronding async function until the curent promise fullfilled or rejected 


// function rand() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             let num = Math.floor(Math.random() * 10) + 1;
//         console.log(num);
//         resolve();
//         },1000);
//     })
// }

// // jab ham kisi surronding async function ko apny async function main call krty hain tu ham chchty hamky yeah function kuj der tak tehar ky execute hu tu ham uspy await lga dyty hain 
// // await is used only in async function 

// let tim = async () => {
//     await rand();
//     await rand();
//     await rand();
//     await rand();
// }

// tim();

// let h1=document.querySelector('h1');


// // now make the bulky color code simple using async and await keyword 

// function changeColor(color,delay){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         h1.style.color=color;
//         resolve();
//     },delay);

//    })
// }

// this is callback function in js 



// function parentfunc(func,n){
//     for(let i=0 ; i<=n ; i++){
//         func();
//     }
// }

// let greet=function(){
//     console.log("hello");
// }

// parentfunc(greet,4);

// async function complete(){
//     await changeColor('red',1000);
//     await changeColor('yellow',1000);
//     await changeColor('green',1000);
// }

// complete();

// WHAT IS API 

// if promise rejected then we used try catch method to execute the code after await  try portion main ham apna await likh dein gy aur catch main error 

// APPLICATION PROGRAMMING INTERFACE IS JUST LIKE THE IT IS MEDIATIOR BETWEEN CLIENT SIDE AND SERVER SIDE AND IT RETURN DATA IN JASON FORMAT JASON IS JAVASCCRIPT OBJECCT NOTATION FORMAT WHEN WE WANT TO ACESS DATA IN JS WE JUST MAKE IT STRING PUTTING TICKS START AND END LIKE THAT AND USING METHODS WE CAN CONVERT THIS DATA STRING FORMAT INTO OBJECT FORMAT 


// let jasonData = '{"activity":"Make a couch fort","type":"recreational","participants":1,"price":0,"link":"","key":"2352669","accessibility":0.08}';

// console.log(jasonData);


// // now applying some methods of jason to extract data in object format 

// let validRes = JSON.parse(jasonData);
// console.log(validRes);

// // jason .stringify is just opposite to this it convert our data to jason format 

// let againConvert = JSON.stringify(validRes);
// console.log(againConvert);



// API TESTING TOOLS 

// hoppscoth is best online tool for api testing  put api on search nar and then get you data you requested

// AJAX IS asyncronous javascript and  xml if the process to request api and get data asyncronously in js it is called ajax

// HTTPS VERBS  is get post delete  etc

// STATUS CODE WHEN GET INFORMATION FROM API are 

// 200 ok  404 not found 400 bad request 500 internal server error 

// ADDING INFORMATIONS IN URL 

// we can add inforamtion in  api urls like adding search and using valirable adding at the end points of the api url 

// api header is the extra information about api what type of data we accpet and many other information genrally two types of api is request api and response api 

// Our first api request for api request we use fetch keyword for request api 

let url = "https://catfact.ninja/fact";

// fetch return promise on this promise we can use promise method like then and catch 


// fetch(url).then((res)=>{
//     console.log(res);

//     return res.json();

// }).then((data)=>{
//     console.log('data1=',data.fact);
//     return fetch(url);
// }).then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log('data2=',data.fact);
// })
// .catch((err)=>{
//     console.log(err);
// })

// fet url return promise and res.json() also return promise these calls are asyncronous calls in js if we want to execute in sequentionally then use await keyword 


async function getWords(){

    let res =await fetch(url);
    let ok = await res.json();
    console.log(ok.fact);

    console.log("hey my name is taimour lakhan");




}

getWords();











