// here we will learn object oriented programming in js 

// in js we use object and array they both are object type inside object there is prototype object by default from where it inherit the method and functions 

// prototype object we can also declare proto type by our self of one function object to other like that 

let obj1={
    caltax(){
        console.log("your tax is 10%");
    },
};

// it will return object also have prototype object 

// we can set objec2 prototype like that to take function and properties from first one 



let obj2={
    salary:10000,

};

obj2.__proto__=obj1;

// console.log(obj2);


// now class is the program template to create the object when we wan to make hundred of same type of object then we make calss then from class we make object 


class toyota{

    constructor(brand){
        console.log("this is automatically invoked when we create object from class if we not make it custom ");
        this.brand=brand;
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop the car");
    }
}

// now make the object from calss 

let fortuner=new toyota("fortuner");


// INHERITENCE IS PASSING DOWN THE PROPERTIES FROM PARENT CLASS TO CHILD CLASS 

class parent{
    hello(){
        console.log("hey taimour");
    }

}

class child extends parent{

}

let obje=new child();  // making the object form class child and it inherit propertis and method from parent class

console.log(obje.hello());

// we can make diffrent class which can inherit the properties and method from parent class 

// USE OF SUPER KEYWORD 
// super keyword is used for inheritense constructor from paren to child 

let url="https://www.w3schools.com/js/js_window_location.asp";
let features="height=800,width=1000";

let btn=document.querySelector(".btn");
btn.addEventListener('click',()=>{
    window.open(url,"google",features);
})


