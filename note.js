// making mote and customising it 

let addBtn=document.querySelector("#addBtn");
let main=document.querySelector(".main");
let note=document.querySelector(".note");

// now apply event on this button to add note 

addBtn.addEventListener("click",()=>{
    addNote();
})


// calling the save note function 

function saveNotes(){
    let notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    let data=[];
    notes.forEach((ele)=>{
        data.push(ele.value);
    })

    // console.log(data);
    localStorage.setItem("notes",JSON.stringify(data));


}

// calling add note function 

function addNote(text=""){
    let note=document.createElement("div");
    note.classList.add('note');
    
    note.innerHTML=
    `<div class="tool">
        <i class="fa-solid fa-floppy-disk save"></i>
        <i class="fa-solid fa-trash trash"></i>

     </div>

   <textarea name="" id="" cols="30" rows="10" class="textarea"></textarea>`

   note.querySelector(".trash").addEventListener("click",()=>{
    note.remove();
    saveNotes();
   })

   note.querySelector(".save").addEventListener("click",()=>{
    saveNotes();
   })

   main.appendChild(note);
    saveNotes();
    
}

(
    function() {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if (lsNotes === null) {
            addNote()
        } else {
            lsNotes.forEach(
                (lsNote) => {
                    addNote(lsNote)
                }
            )
        }

    }

)()



