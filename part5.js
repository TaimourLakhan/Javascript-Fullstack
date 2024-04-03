// object literals in js is like the key valur pair it is two dimensional or multidemiensional array of js 

// declaring the object like that 

// let student={
//     name:"taimour",
//     age:23,
//     address:"chak no 469 gb"
// }

// // now if we want to acess the object acess like that 

// console.log(student["name"]); // insdie sqaure brakets we must pass string type of key
// console.log(student.age);
// console.log(student);


// //js automatically convert the key into string like it sortinf in arrat it take as string and every string has unicode no in js 

// // UPDATE VALUES IN OBJECT 

// // update the valur in object 

// student.name="taimour lakhan";
// console.log(student);


// // now adding value is simple as like 

// student.gender="male";
// console.log(student);


// // nested object 

// let details={
//     taimour:{
//         no:3232132,
//         contct:fsdklfjlasdkjf,
        
//     },
//     lakhan:{
//         no:3232132,
//         contct:fsdklfjlasdkjf,
        
//     },
//     coding:{
//         no:3232132,
//         contct:fsdklfjlasdkjf,
        
//     },
// }


// console.log(details.taimour.no); // nesting of objects

// MATH OBJECT IN JS 

// math is the object in js having alot funcation like 

// Math.PI  it will give pi 
// Math.E   it will give e value
// Math.abs()
// Math.pow()
// Math.floor()
// Math.random()
// Math.ceil()


// GENRATE THE RANDOM VALUE BETWEEN 1 TO 100;

// let num=Math.random();
// // for(let i=0 ; i<=100; i++){
// //     let newNum=num*100;
// //     let newNum1=Math.ceil(newNum);
// //     console.log(newNum1);

// // }

// // or 

// num=num*100;
// let newNum=Math.floor(num);
// console.log(newNum);



// GUESSING GAME IN JS USING MATH FUNCATOIN AND OTHER 

// let user=prompt("enter the random no");
// console.log(user);

// let num=Math.random();
// num=num*10;
// let newNum=Math.floor(num);
// console.log(newNum);

// while(true){
//     if(user==newNum){
//         console.log("you guess it right bro");
//         break;

//     }else{
//         console.log("try again");
//     }
//     user=prompt("enter again");
// }



// Practise question of part 5 

// q#1

// genrate random no between 1 and 6 

let num=Math.random();
num=num*6;
console.log(Math.floor(num));



// Q#2 

const person={
    name:"taimour",
    age:23,
    city:"fsd"
}

person.city="New York";
person.gender="Male";

console.log(person);

