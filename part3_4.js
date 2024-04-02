// strings are immutable in javascript if we apply method it just make new sring for change but cannot change the old string 

let str="  taimour lakhan   ";
let strnwe=str.trim();
console.log(strnwe);
console.log(str);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.indexOf('a'));
console.log(str.repeat(2));
console.log(str.replace('a','y'));
console.log(str.slice(5,str.length));


// Practise questions on string 

let msg='  help! ';

// trim and upper case 
// q#1

let newMsg=msg.trim().toUpperCase();
console.log(newMsg);


// q#2

let nam='ApnaCollege';

console.log(nam.slice(4,9));    // output will be Colle
console.log(nam.indexOf('na')); // output will be 2
console.log(nam.replace('Apna','our')); // output will be ourCollege
console.log(nam.replace('l','t')); // output will be ourCotlege



// ARRAYS IN JS 

// arrays are mutable we can change the array 

let arr=["audi","ferrari","doge","mastang" ,"porche"]

arr.push("toyota"); // add toyota to the end of the array
console.log(arr);
arr.unshift("honda"); // add honda to the start of the array
console.log(arr);

arr.pop(); // remove array element from the last and return it 
console.log(arr);


arr.shift(); // remove array element from the start and return it 
console.log(arr);

// array are mutable like 

arr[0]="lamborgini";

console.log(arr);


// practise question 

let start=['january','july','march','august'];
console.log(start);

// start[0]=("july");
// start[1]=("june");

start.pop();
start.pop();

start.unshift('july');
start.unshift('june');



console.log(start);



// indexof and include method 

let git=['taimour',"java","js","python"];

console.log(git.indexOf("java")); // it give the index of java in the string 

console.log(git.includes("java")); // it will give the true or false value



// concatination and reverse method in arrays 

let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];

// now cancatination of ararys like that 

console.log(arr1.concat(arr2)); // it will prin both array but cannot change the original one 

console.log(arr1);


// now reverse of the aray 

console.log(arr1.reverse()); // it will reverse the order of the elemnt in the aray and it change the original one 

console.log(arr1);



// slicing in the aray 

let array11=["car","bikes","buses","traveling"];

console.log(array11.slice(1));  // it will return the array start from index one

console.log(array11);   // this slice method will not change the original aray 

// we can pass two argument but end one is exclusive in slice method 


// splice method 

// it take four arguments 

// splice(startindex,deleteimdex,addstart,addend); 

let cities=["lahore","karachi","faisalabad","islamabad"];

// it will mutate the original aray anyway 

console.log(cities.splice(1));  // as it remove from index one to onward 
console.log(cities);

cities.push("samundri");
cities.push("muree");
cities.push("swat");
cities.push("gilgit");


console.log(0,1,"mardan","peshawer","kpk");


// sorting of array it first convert into string then sort 

// Paractise question in js 

// q#1

let start1=['january','july','march','august'];

start1.splice(0,2,'july','june');
console.log(start1);

// q#2

let lang=['c','c++','java','js','html','css','python','rust','sql'];

lang.reverse();

console.log(lang.indexOf('c'));


// tiltak tow in arrat 

// nested arrays like 

let nested=[['X',' ','O'],[' ','X',' '],['O',' ','X']];
console.log(nested);




// MAIN PRACTISE QUESTIONS IN THE ARRAY 

// q#1


let narr=[7,9,0,-2];

let n=3;

console.log(narr.slice(0,3));

// q#2

let m=4;

console.log(narr.slice(1,4))


// q#3

let strr="";
if(str.length==0){
    console.log("string is blank")
} else{
    console.log("string is not blank")
}


// write a program if a elemnt exist in an array or not 


let good=[1,2,3,4,5,6,];

console.log(good.includes(3));









