// // for(let i=1; i<=15; i+2){
// //     console.log(i);
// // }

// // this will print the odd numbers 


// let ok=console.log("it is good for health");

// // alert(ok);

// for(let i=1; i<=15;i=i+2){
//     console.log(i);
// }


// // now backward from 15 to 1 

// for(let i=15;i>=1;i=i-2){
//     console.log(i);
// }

// // now printing the even number like that 

// for(let i=0;i<=10;i=i+2){
//     console.log(i);
// }

// // printing even from reverse 10 t0 0

// for(let i=10;i>=0;i=i-2){
//     console.log(i);
// }


// // Print the multiplication table of 5 using the for loop 

// let n=prompt("enter the number");

// for(let i=1;i<=10;i++){
//     console.log(`${n} * ${i}= ${n*i}`);
// }


// // USE while loop it is same as for loop 

// // here declaration is outside the loop and updation is inside 

// let i=0;
// while(i<=10){
//     console.log("my name is tiamour lakhan");
//     i++;
// }


// // GUESSING FAVROUTE MOVEI GAME 

// let favMovie='Titanic';
// let guess=prompt("enter your favroute movie");

// while((guess!=favMovie)&&(guess!='quit')){
//     console.log('wrong guess');
//     guess=prompt("try again");
// }
// if(guess==favMovie){
//     console.log("congratulations you guess it right");
// }


// // we use break keyword for breaking the loop for or while or any other 

// // for loops for arrys 

// let fruits=['banana','mango','appla'];

// for(let i=0;i<=fruits.length;i++){
//     console.log(i,fruits[i]);
// }


// // NESTED ARRAY FOR LOOP 

// let nesting=[['car','bus','bike'],['cow','goat','horse']];

// for(let i=0; i<=nesting.length;i++){
//     console.log(`LIST NO ${i}`);

//     for(let j=0; j<=nesting[i].length ; j++){
//         console.log(nesting[i][j]);
//     }
// }

// // for of loop used for collectio of array and string if we want ot access every single element 


// let numbers=[1,2,3,4,5,6,7,8,9];
// for(tim of numbers){
//     console.log(tim); // it will print every element of the aray
// }

// // nested for off loop 

// let numb=[[11,22,33,44,55],[66,77,88,99]];
// for(ok of numb){
//     for(numbing of ok){
//         console.log(numbing);
//     }
// }


// TODO APP IN JS USING LOOPS 

// building todo app using the js concepts we learn uptil now 

// let todo=[];

// let req=prompt("enter your request");

// while(true){
//     if(req=='quit'){
//         console.log("quiting app taimour");
//         break;
//     }

//     if(req=='add'){
//         console.log("-----------adding-----");
//         let add1=prompt("enter the value");
//         todo.push(add1);
        
        
//         console.log("--------adding ")
//     }else if(req=='list'){
//         for(let i=0 ; i<=todo.length ; i++){
//             console.log(i,todo[i]);
//         }
//     } else if(req=='delete'){
//         let inde=prompt('enter the index where you want to delete ');
//         todo.splice(inde, 1);
//         console.log("task added")
//     }else{
//         console.log("entring the wrong request");
//     }

//     req=prompt("what is your next request");

    
// }


// practising the part 4 practise questions 

let arr=[1,2,3,4,5,6,2,3]; /// delete the occurence of num and num=2


// result should be like that   [1,3,4,5,6,3];

for(let i=0 ; i<=arr.length ; i++){
    if(arr[i]==2){
        arr.splice(i,1);
    }
    console.log(arr);
}


// q#2

let num='1234566';
console.log(num.length);

// q#3

// get the factorial of given number 

let n=5;
let factorial=1;
for(let i=1 ;i<=n ; i++){
    // let fac=(` the factorial of ${n} is ${n*(n-i)}`);
    factorial *=i;
    if(n==i){
        console.log(`the factorial of ${n} is ${factorial}`);
    }

    
    

}



// find the largest number in the arrat with the only positive no 

let arr1=[1,2,6,4,5,6,7,8];

largest=0;

for(let i=0 ; i<arr1.length ; i++){
    if(largest<arr1[i]){
        largest=arr1[i];
    }
}

console.log(largest);