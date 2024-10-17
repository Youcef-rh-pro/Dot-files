
class note {
  constructor(title, description, importance, duDate) {
    this.title = title;
    this.description = description;
    this.importance = importance;
  }

}
class noteItems {
  render(element) {
    const noteEl = document.createElement("div");
    // noteEl.className = " card mb-3";
    noteEl.innerHTML = `
   <div class="card bg-white m-2  text-dark mb-3">
  <div class="card-body">
    <h2 class="card-title">${element.noteName}</h2>
    <h3 class="card-text">${element.noteDescription}</h3>
    <button class="btn btn-danger">Delete</button>
  </div>
</div>
    `;
    return noteEl
}
  
  }

class noteList{
update(){
  const noteGrid =document.getElementById("noteGrid")
  noteGrid.innerHTML=''
 this.render(noteGrid)
}
render(grid){
 const  getData= JSON.parse(localStorage.getItem('allNotes'))
 if (getData===null){
   const noteEl = document.createElement("div");
   // noteEl.className = " card mb-3";
   noteEl.innerHTML = `
   <div class="card bg-white m-2  text-dark mb-3">
   <div class="card-body">
   <h2 class="card-title">theres no note</h2>
   <h3 class="card-text">add note by pressing add Note</h3>
   </div>
   </div>
   `;
   grid.append(noteEl)
  }else{
   console.log(getData)

   getData.forEach(element => {
     const noteItem = new noteItems
     grid.append(noteItem.render(element))
    })
  }
}
}
class app {

  
  noteGet() {
    const  notes = [];
    const mydata= new noteList 
     mydata.update()
   const confirmation= document.getElementById("confirmAddNote")
   confirmation.addEventListener("click", () => {
     const noteDescription = document.getElementById("notDescriptionInput").value;
     const noteName = document.getElementById("noteNameInput").value;
   
       
     
     notes.push({noteName, noteDescription});
     $('#addNoteModal').modal('hide');
     document.getElementById('noteNameInput').value = '';
     document.getElementById('notDescriptionInput').value = '';
     
     mydata.update()
     
     this.noteAdd(notes)
    });
  }
  noteAdd(notes){
    localStorage.setItem('allNotes',JSON.stringify(notes))

    }
  }
  const myApp=new app()
  myApp.noteGet()

 const newNote = new note