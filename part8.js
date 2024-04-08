// // // array method foreach mostly used for array here to put some functionm on indivivual items of the array 


// // // let arr=[{name:'taimour',marks:56},{name:'taimour lakhan',marks:76},{name:'taimour_dev',marks:86}];

// // // // now for each function syntax is arr.forEach(theb put function here )


// // // arr.forEach((ok)=>{
// // //     console.log(ok.marks);
// // // })



// // // it is mostly used for array to indivual functions on it 





// // // Map and filter 


// // let arr=[10,20,30];

// // let newArr=arr.map((i)=>{
// //     return i*2;
// // });

// // console.log(newArr);  // it make new array going to every element of the previous array put fucntionality on it and stored in new array


// // // now if we want some condition on wvery single elemrnt of array if it true then add to new array if not then not 

// // let arr1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]; 

// // // making the new array with the help of odd array that is only even array


// // let newArr1=arr1.filter((n)=>{
// //     return (n%2==0);
// // });

// // console.log(newArr1);


// // // every and some method is like logical and and or opertor if every element of the array is true then every reurn true if not then not if one is true then sum return true 





// // reduce method in array take call back function to reduce aray in one element at last it take two accumulator and ele two argument in function callbak acculator store the previous result 


// // let arr=[1,2,3,4,5,6,7,8];

// // let newArr=arr.reduce((accu,ele)=>{
// //     return accu+ele;
// // });

// // console.log(newArr);


// // dry run of this it update every time accu and move to next step 

// // returning maximum in array 

// // let arr=[2,3,4,9,6,7,8,10];

// // let max=arr.reduce((accu,ele)=>{
// //     if(ele>accu){
// //         return ele;
// //     }else{
// //         return accu;
// //     }
// // });

// // console.log(max);

// // in this way we calculate maximum in an array 


// // let arr=[10,20,30,40];

// // let mul=arr.every((ele)=>{
// //     return (ele%10==0);
// // });

// // console.log(mul);


// // find minimum no in an array 


// let arr=[5,2,3,4,5,6];


// function getMini(arr){

//     let newarr=arr.reduce((accu,ele)=>{
//         if(accu<ele){
//             return accu;
//         }else{
//             return ele;
//         }
//     });

//     return newarr;

// }



// console.log(getMini(arr));


// spread take as arr and string as indiviual 


// let arr=[1,2,3,4,5,6,7];

// console.log(Math.min(...arr));

// console.log(...arr);

// let name="taimour lakhan";

// console.log(...name);


// // spreading the array 


// let arr11=[22,3,3,55,66,77,8,9];

// let newarr11=[...arr11]; // just make new array like arr1 copying array


// console.log(newarr11);

// let obj={
//     name:"taimour",
//     age:23
// };

// let newobj={...obj};
// console.log(newobj);


// let arr=[1,2,34,5,5,434534,5345,34534,534,534,534];

// console.log(...arr);

// var one=10;

// {

//     let two = 20;
// }

// console.log(one+two);


// REST CONCEPT USE 


// function sum(...arr){
//     return arr.reduce((accu,ele)=>accu+ele);
// }

// console.log(sum(1,2,3,4,5,6,7,8,9));


// destrcuturing in array 


// let arr=['taimour','lakhan','karachi','pakistan'];

// let[name,cast,...others]=arr;

// console.log(name);
// console.log(cast);
// console.log(others);


// // now detsructuring in objects 


// let obj={
//     name1:'taimour',
//     age:23,
//     arr:[1,2,3,4,5,5],
//     address:'lahore'
// }

// let {name1,age}=obj;

// console.log(name1);
// console.log(age);



// Q#1


// square and sum the array elements and then average the elements 


// let arr=[2,4,6,8];

// let newArr=arr.map((ele)=>{
//     return (ele*ele)+ele; // this will square and sum the array 
// });

// console.log(newArr); //this is result of square and sum of array 

// // now average of the array 

// // let count=0;

// // here we need single answer so we use reduce funcion for average 

// let avg=newArr.reduce((acuu,ele)=>{
//     let count=acuu+ele;

//     return count/newArr.length;

// });

// console.log(avg);


// let arr=[1,2,3,4,5,6];

// // create a new array using map function whoz each element is original array plus 5

// let newArr=arr.map((ele)=>{
//     return ele+5;
// });

// console.log(arr);

// console.log(newArr);


// create a new array who element are in uppercas present in original array 

// let arr=['taimour','hammad','bilal','asim','sham'];



// let newArr=arr.map((ele)=>{
//     return ele.toUpperCase();
// });

// console.log(arr);
// console.log(newArr);


// write a function called doubleAndReturnArgs which accepts an array and a varialble no of arguments the function reutrn the original array value with double the argument in new array 






