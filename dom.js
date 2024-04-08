// // // when we attach js file with html css it load as a dom in js we can manipulate in it using js dom mean document object model where all the elements are the obects like and have multiple key value pair inside in it we can chang it using js 


// // // now we can select the element (object) form it return in the form of object by selection then we can manipulate it targeting its key value pair 

// // // if id is not present then it return null 

// // // let ok=document.getElementById("text");  // this will select the element which is object in dom using the js we can manipulate the dom using js 


// // // let cards=document.getElementsByClassName("card");

// // // for(let i=0 ;i<cards.length ; i++){
// // //     console.dir(cards[i].childNodes[1].src); // it return object of html collection how manu inside it
// // // }


// // // // NOW SELECT ELEMENT BY TAG NAME 

// // // // it also giv us html collection of objects how many if tag not present then it return empty list 


// // // document.getElementsByTagName("p"); // this will return collection of para object 

// // // // MOST FREQUENTLY METHOD USED IS QUERY SELECTOR ALL AND QUERY SELECTOR WE SELECT SAME AS IN CSS 


// // // let tim=console.dir(document.querySelector("h1")); // it return single first h1 tag 
// // // console.dir(document.querySelectorAll("h1")); // it return nodlist  h1 tag 

// // // // we write same as in css if we want to select the img inside the card class then we we like that 

// // // console.dir(document.querySelectorAll(".card img")); // nodlist of images inside card 


// // // OBJECT CONTENT MANIPULATION 

// // // inner text show all the text which we saw on screen 
// // // inner content show all the text hidden also which cannot seen on screen 
// // // innerhtml show all the text hidden open and tags inside element 

// // // inner text take every thing as text shows only which we saw on screen no spaxes etc 

// // // text content shown everything hidden also which we write on html file 

// // // inner html show tag html markup we can use tags inside it during manipulation while inner text take every thing as text 


// // // ATTRIBUTES MANIPULATION 


// // // attributes are like id classes tag style src href etc 

// // // Object.getAttribute(att) getting attribute known as getter 

// // // object.setattrubite(att,val for set ) setting attribute known as setter 

// // // id classe src many others are sttributes changing attributes also remove the styling which would apply on it previously 


// // // let ok=document.querySelector("img");
// // // console.dir(ok);

// // // // getting and setting attribute 

// // //  console.log(ok.getAttribute("id"));

// // // //  now setting attribute 

// // // console.log(ok.setAttribute("id","taimour_lakhan")); // this will remove the styling on id of image 




// // // Manipulating styling of element object

// // // styling property is just inline style in html no change in css file style 


// // // let style=document.querySelector(".card h1");
// // // console.dir(style.style);

// // // let ok=style;

// // // ok.style.color="red"; // it will change the color red 


// // // it just the inline style of html not changing the style of css 


// // // Class list shows us how many classes we gave the object it show in form of list 

// // // if not classes present then it show empty list we can add classe into it like that 

// // // let heading=document.querySelector(".card h1");

// // // console.log(heading.classList);
 

// // // // adding classes into it 

// // // heading.classList.add("abc");  // it will add the class in object h1

// // // console.log(heading.classList);

// // // // now if we wana remove the classes we can like that 

// // // heading.classList.remove("abc"); // it will remoce the class green from object h1
// // // console.log(heading.classList);


// // // // now contains method show us in true or false if class exist or not 

// // // console.log(heading.classList.contains("red")); // it will return us false bcz we donot have red class in it set attrubute set the value of object to a single class value 


// // // // now toggle method is just true and false return add and reomve class if exist remove if not add it all toggle 


// // // heading.classList.toggle("green"); // it will return true and add green class in it 
// // // console.log(heading.classList);

// // // heading.classList.add("abc");
// // // console.log(heading.classList);


// // // classlist is good manner of adding class for styling for object  set atrtrubute additon of classes it contain only single class in it 


// // // NAVIGATION ON PAGE GETTING NOW AFTE THIS BEFORE THIS ELEMENT WHAT IS 

// // // there are three main properties of navigation which are 


// // // let h1=document.querySelector("h1");

// // // console.log(h1.parentElement); // it will return form which is parent parent is always single 


// // // // now child is second one of navigation 

// // // let form=document.querySelector(".form");

// // // console.log(form.children); // it give html collection of children which it posses
// // // console.log(form.childElementCount); // it give no how many element it has


// // // // now previous element sibling and nextlement sibling used 

// // // let form1=document.querySelector("form");

// // // console.log(form1);

// // // console.log(form1.parentElement); // it is form class div
// // // console.log(form1.children);  // it has input children list of html collection
// // // console.log(form1.childElementCount); // give no of childrens
// // // // console.log(form1.childElementCount);
// // // console.log(form1.previousElementSibling);  // will give previous element sibling which is h1



// // // ADDING ELEMENT ON PAGE IS MAJOR CONCEPT 

// // // we can create element using js and then appen it to the doucment 

// // let newp=document.createElement('p'); // it create new para 

// // newp.innerText="hey this is new para";

// // // we can append it inside parent or last anywher first saw how we can appen it inside parent 

// // let form1=document.querySelector("form");
// // console.log(newp);

// // form1.appendChild(newp); // this will insert para at last of the form appen mean add in last
// // console.log(form1);

// // // now other then append child we use appen which will add last append we use append string 

// // newp.append("this is new str"); // this will add new string inside the new create element

// // let btn=document.createElement('button');

// // btn.innerText='clickme';

// // // now append it 



// // newp.append(btn); // it will add inside the new para element 


// // // diffrence between apend and apendchild is that appendchild we add one at a time while in append we add multiple and we can add string append didnot reurn anything appencjhild child did 



// // // PREPEND METHOD ADD IN THE START OF THE PARENT 

// // form1.prepend(newp); // this will add in the first order 


// // // now Insert adjacent tells us exactly where we want to add 

// // // insertadjacent(positoin,element we will add) 

// // let card=document.querySelector(".cardmain");

// // let h11=document.createElement('h3'); // creating h3

// // // adding text in it 

// // h11.innerText='h3 heading';

// // // now we adding it in adjacent postions inside document 

// // console.log(h11);

// // card.insertAdjacentElement("beforebegin",h11); // this will add just before the div card 
// // card.insertAdjacentElement("afterbegin",h11); // this will add just after the div start first child card 
// // card.insertAdjacentElement("beforeend",h11); // this will add just before the div end last child card 
// // card.insertAdjacentElement("afterend",h11); // this will add just after the div card  end


// // // like we add element inside documment we can remoce it also 

// // h11.remove(); // this will remove h11 from document




// // Paractise question in dom using js 


// // let p=document.createElement('p');

// // let form=document.querySelector("form");

// // p.style.color='red';
// // p.innerText="i am a red text ";

// // form.append(p);

// // let h3=document.createElement('h3');

// // h3.innerText='i am blue h3';
// // h3.style.color='blue';

// // form.append(h3);

// // let div=document.createElement('div');

// // let h1=document.createElement('h1');

// // h1.innerText='i am a div';

// // div.append(h1);

// // div.append(p);

// // div.style.backgroundColor='pink';
// // div.style.border='black';


// // form.append(div);


// // Original practise questions are 


// let form=document.querySelector("form");


// // Q#1 create a new input and button element on the page 


// let inp=document.createElement('input');

// inp.setAttribute('placeholder',"enter your name");

// form.append(inp);
// inp.style.marginTop='1rem';


// // Q #2  
// // change placeholder value to usename and id of butoon to btn 


// let btn=document.createElement('button');
// btn.innerText='click me';

// form.append(btn);

// btn.setAttribute('id','btn');
// inp.setAttribute('placeholder','username');


// // Q #3  slect btn using query selctor id chang btn color to white and background color to black 

// let ok=document.querySelector('#btn');

// ok.classList.add('btnstyle'); // this will add class and style related to this class



// // Q#4 
// // create a para and inner html will be taiomur and lakhan is bold 


// let para=document.createElement('p');

// para.innerHTML='taimour <b> lakhan </b>';

// form.append(para);







































