// variable in js 

a=10;
console.log(a);

// strings in js 
let name="taimour lakhan";
console.log(name);

// practise traffic 

let color="green";

if(color=="red"){
    console.log("ok stop here");
}

if(color=="yellow"){
    console.log("ok start here");
}
if(color=="green"){
    console.log("ok let go");
}

// popcorn size practise question 

let size='XL';
if(size==='sm'){
    console.log("price is 100");
}else if(size==='md'){
    console.log('price is 159');
}else{
    console.log('price is 300 bcz it is excel size ');
}

// practise question about good string 

let str="this good string";

if(str[0]==='a'&& str.length>3){
    console.log("this is the good string");

}else if(str[0]!='a'&&str.length<3){
    console.log("it is not a good string")
} else{
    console.log("all strings are good")
}


let num=12;

if((num%3===0)&&((num+1==15) ||(num-1==11))){
    console.log("safe")

}else{
    console.log("unsafe")

}


// switch statment 

let day=2;

switch(day){
    case 1:
        console.log("its monday");
        break;
    case 2:
        console.log("its tuesday");
        break;
    case 3:
        console.log("its wednesday");
        break;
    case 4:
        console.log("its thursday");
        break;
    case 5:
        console.log("its friday");
        break;
    case 6:
        console.log("its saturday");
        break;
    case 7:
        console.log("its sunday");
        break;
    default:
        console.log("it is something else");    
        

}

// practise questions 

// question 1

let numbe=100;
if(numbe%10==0){
    console.log("good");
}else{
    console.log("bad");
}

// question 2

let name1=prompt("enter your name");
let age1=prompt("whats your age");

console.log(`the name is ${name1} and his age is ${age1}`);
alert(`name is ${name1} and age is ${age1}`);

// question 3

let quator1=1;

switch(quator1){
    case 1:
        console.log("jan,feb,march");
        break;
    case 2:
        console.log("jan,feb,april");
        break;
    default:
        console.log("it eid day")    
}

// question 5


let numbe1=32223;
let numbe2=89393;

if(numbe1[numbe1.length-1]==numbe2[numbe2.length-1]){
    console.log("same last digit");
} else{
    console.log("diffrent");
}


// question 4


let a=10;
let b=20;
let c=30;

if(a>b){
    if(a>c){
        console.log("a is largest");
    }else{
        console.log("a is small")
    }
} else if(c>b){
    if(c>a){
        console.log("C is the largest of all");
    }else{
        console.log("b is greater");
    }
}



