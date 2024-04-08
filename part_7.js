// let person={
//     name:'taimour',
//     age:23,
//     eng:100,
//     phy:89,
//     che:90,
//     avg(){
//         return (this.eng+this.phy+this.che)/3; // this refers to the object in which this used can aceess all key in that object 
//     }
// }

// console.log(person.avg());


// try and catch pair is used if an error might be through try get the error and then send to cathc it handle if errror happen withour try catch block our program doesnot execute full try and catch will execute our full program 

// console.log("hello tiamour");
// console.log("hello tiamour");
// console.log("hello tiamour"); 

// try{
//     console.log(a);
// }catch(error){
//     console.log("Now our code will execute");
//     console.log(error); // it will print our error
// }

// console.log("hey taimour lakhan");
// console.log("hey taimour lakhan");
// console.log("hey taimour lakhan");


// // AROOW FUNCTION IS THE NAMELESS FUNCATION IN THIS FUNCATION WE DONOT NEED TO WRITE FUNCITON TO DECLARE A FUNCIOTN IT JUST STORED IN A VARIABLE SIMPLE SYTAX USED AS A PARAMETER IN HIGH ORDER FUNCTION 


// const cube=(n)=>{console.log(n*n*n);};
// // let tim =alert('taimour');

// cube(4);


// if we return value in arrow funciton without console then it become more compact we used bracets instead of curly brackets and though we donnot need braces if we used single variable 



// it make sum function with easy donot need return keyword


// const sum = (a, b) => (a + b);

// console.log(sum(10+90));

// let cube= (n)=>n*n*n;

// console.log(cube(3));
// // console.log(typeof(cube(3)));




// settimeout is the buildin function in window object in js 

// it take two argument first one is function as call back and second one is timeinterval after how much delay it execute it take time in miliseconds 

// console.log("hi there!");

// setTimeout(()=>{
//     console.log("taimour lakhan");
// },3000);  // other document flow will execute on same manner on other side it will execute other side after 3s 

// console.log("you'r welcome");

// this function mostly used for api to fetch data after how much time interval 

// now set interval function same as set timeout it just execute function after time interval multiple times setimout just execute it once 

// setInterval(()=>{
//     console.log("taimour_dev");
// },2000);


// this keyword for arrow and simple function 

// simple function this mean the object this where our function used but in arrow function if we use this it mean this is not his this it is his parent scope this 


// let person={
//     name:'taimour',
//     age:23,
//     call:this,

//     global1:function(){
//         console.log(this);  // this is object this in simple function 
//         this.name;
//     },

//     global2:()=>{
//         console.log(this); // this will give the window obect becasue his parent this is window
//         this.age;

//     }
// }

// person.global1();
// person.global2();

let sqr = (n) => (n * n);
console.log(sqr(3));


// now make funcation that will print hello world five time after 2 s


// setInterval(()=>{
//     console.log("hello world");
//     console.log("hello world");
//     console.log("hello world");
//     console.log("hello world");
//     console.log("hello world");
// },2000);

// write an arrow funtion take accept array as input and return as average of array 


let arr = [10, 70, 50, 40];

let avg = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i];

    }
    return count / arr.length;
}

console.log(avg(arr));


// Q #2

let no = prompt("give the no");

let Even = (no) => {



    if (no % 2 == 0) {
        console.log("no is even");
    } else if (no == 0) {
        console.log("it is zero pass other no");

    } else if (no % 2 != 0) {
        console.log("it is odd no though");
    } else {
        console.log("okay you can go now");
    }

}

Even(no);






