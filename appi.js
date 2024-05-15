// let url="https://icanhazdadjoke.com/";

// // fetch is used to get api data it return promise 

// async function getJokes(){
//     let res= await fetch(url); // this will return promise
//     let data= await res.json();  //this will also return promise 
//     console.log(data);
// }

// getJokes().then(()=>{
//     console.log()
// })


let url="https://catfact.ninja/fact";

async function getFacts(){
    let res=await fetch(url);
    let data=await res.json();
    console.log(data);
}

let req=getFacts();

// it will return promise so we can use promise then and catch methos into it 

req.then((result)=>{
    console.log(result);

})