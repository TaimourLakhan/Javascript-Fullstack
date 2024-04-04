// FUNCTION IS THE BLOCK OF CODE THAT WILL EXECUTE WHEN WE CALL IT 

// FUNCATION IS USED FOR OUR EASYNESS

// DECLARING OF THE FUNCTION 

// here am making function of printing 1 to 5 

function print1to5(){
    for(let i=0 ;i<=5 ;i++){
        console.log(i);
    }
}

// declaration ends 

// calling function for execute 

print1to5();  //it will print 1 to 5 


// function for addult 

function adult(){
    // let age=18;
    let age =prompt("what your age");
    if(age>=18){
        console.log("you are adult")
    } else if(age<18){
        console.log("your are child")
    }else{
        console.log("go and play cricket")
    }
}

adult();



// create a function of roll a dice 

function dice(){
    let rand=Math.random()*6;
    let rand1=Math.floor(rand);
    console.log(rand1);
}

dice();


// NOW FUNCATION WITH ARGUMENTS 

function average3(a,b,c){
    console.log((a+b+c)/3);
}

average3(2,4,6);


// create a function that prints multiplication table of a number 

let num=prompt("enter the no :");

function mult(num){
    
    console.log(`the multiplication table of ${num} is :`);
    for(let i=0 ; i<=10 ; i++){
        
        console.log(`${num} *${i} = ${num*i}`);
    }
}

mult(num);


// return value in funcaiotn is jsut reurn it will not print like console and it will terminate the funncation where we use it 

// create a funcaton that return sum  of number 1 to n 

let n=9;

let sum=0;

function sum1(n){
    
    for(i =0 ; i<=n ; i++){
        sum = sum+i;
        
    }
    return sum;
}

console.log(sum1(5));



// create a funcation that will return the concatination of all strings in a array 

let arr=['taimour','bilal','asim','marvel','sham','ironman'];

function conc(arr){
    let str="";
    for(let i =0 ; i<=arr.length-1 ; i++){
        
        str +=arr[i];
        
        
    }
    return str;
   
}

console.log(conc(arr));


// scopes and hoiting 

function outer(){
    
    function inner(){
        console.log(x);
        console.log(y);
    }

    let x;
    let y;  // this is just becasue of hosting

    
    inner();
}
outer();

let greet="hey"; //globalscope

function fungreet(){
    let greet="salam";  //funcation scope or block scope
    console.log(greet);

    function ingreet(){
        let greet="wslam"; // lexical scope
        console.log(greet);
    }

    ingreet();
}

console.log(greet);
fungreet(); 

// whole funcation will print hey then slam then wslam 


// nameless funcaiton is called funcaiton expression or it is called funcation expression wher we used to store the funcation in variable 

let name= function(){
    console.log("taimour");
}

// now call the varibale 

name();

// higher order function which take funcation as an arguments 

let greet=function(){
    console.log("hello taimour");
}

function multiplegreet(func,n){
    for(let i=0 ;i <=n ; i++){
        func();
    }
}

multiplegreet(greet,10);   
//  caling funcation inside the funcation called higher order funcation 


//  HIGHER ORDER FUNCATION 

let ramadan=function(){
    console.log("congratulation it is ramadan");
}


function eid(func,n){
    
    for(let i=0 ; i<=n ; i++){
        func();
    }
}

eid(ramadan,4);


// odd even function factory 

function oddOrrEven(request){
    if(request=='odd'){
        let odd=function(){
            console.log(!(n%2==0));
        }
        return odd;
    }else if(request=='even'){
        let even=function(){
            console.log(n%2==0);
        }
        return even;
    }else{
        console.log("wrong rewuest");
    }
}

let request=prompt("enter your request");
oddOrrEven(request);



// METHODS IS THE FUNCTION INSIDE THE OBJECT WE MAKE CALCULATOR LIKE THAT 

let CALCULATOR={
    add:function(a,b){
        return a+b;
    },
    mul:function(a,b){
        return a*b;
    },
    sub:function(a,b){
        return a_b;
    }
}

console.log(CALCULATOR.add(3,4));


// shorthand way to define funcatio inside the object is 

let mathing={
    addi(a,b){
        return a+b;
    }
}

console.log(mathing.addi(10,10));



// Practise question of part 6

// write a javascript funcation that return arrat element larger than a number 

let arr=[1,2,3,4,5,6,7,8,8,5,4,2,5];
let no=7;

function getLargest(arr,n){
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]>no){
            console.log(arr[i]);
        } 
    }

}

getLargest(arr,no);

// write a javascript funcation to extract a unique chatacter from a string 


let str = "abcdabcdefgggh"; // answer would be abcdegh

function getUnique(str){
    for(let i=0 ; i<str.length ; i++){
        let cur =str[i];
        return cur;
        

    }
    let ans ='';

    if(ans.indexOf(curr)==-1){
        ans +=curr[i];
        return ans;
    }

}

console.log(getUnique(str));











