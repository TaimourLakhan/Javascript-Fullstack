// Q#1

// write a js program that returns array element larger than a number 

// let arr=[1,2,3,4,5,6,7,8,9,11,22];
// let n=5;

// function getLarger(arr,n){
    
//     for(let i=0 ; i<arr.length ; i++){
        
//         if(arr[i]>n){
//             console.log("array have larger no");
//         }else{
//             console.log("wrong pass");
//         }

        
        
        
//     }
    
    

    
// }

// getLarger(arr,n);



// Q#2

// write js program that get unique characters from string 

// let str='abcdabcefgggh';

// function getUnique(str){

    
//     let ans='';
//     for(let i=0 ; i < str.length; i++){
//         // let curr=str[i];
        
       
//         if(ans.indexOf(str[i])==-1){
//             ans += str[i];
            
            
//         }
        

//     }

//     return ans;
    

// }

// console.log(getUnique(str));


// function uniqueCharacters(str) {
//     let uniqueStr = '';
//     for (let i = 0; i < str.length; i++) {
//       if (uniqueStr.indexOf(str[i]) === -1) {
//         uniqueStr += str[i];
//       }
//     }
//     return uniqueStr;
// }


// // Example usage:
// let result = uniqueCharacters("hello world");
// console.log(result); // Output: "heo wrld"



// Q#3

// let arr=["australia","germany","united states of america"];

// function getLargestElement(arr){
//     // let largestlength=0;
//     let largestElement='';

//     for(let i=0 ; i<arr.length ; i++){
//         // const currentElement=arr[i];
//         if(arr[i].length>largestElement.length){
//             // largestlength=currentElement;
//             largestElement=arr[i];
//         }

//     }
//     return largestElement;
// }

// console.log(getLargestElement(arr));


// write a javascript program that count no of vowels in a string 


// let str='abcdefghijklmnopqrstuvwxyz';

// function countVowel(str){
//     let vowels=['a','e','i','o','u'];
//     let count=0;

//     for( let i=0; i<str.length ; i++){
//         for(let j=0 ; j<vowels.length ; j++){
//             if(str[i]===vowels[j]){
//                 count += 1;
//             }

//         }
//     }
//     return count;
// }

// console.log(countVowel(str));



// genrate a random no from start to end 


let start=100;
let end=200;

function randomGenrator(){
    let diff=end-start;
    let rand=Math.floor(((Math.random())*diff)+start);
    return rand;
}

console.log(randomGenrator());
  
  
  
  
  


