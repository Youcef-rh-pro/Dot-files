const Person={
name:"Hedy Lamarr",
photo:"https://i.imgur.com/yXOvdOSs.jpg",
theme:{
    backgroundColor:'black',
    color:'pink'  
}
}


function Todo(){
return(
<>
    <h1>Hedy Lamarr &apos s Todos</h1>
<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  className="photo"
/>
<ul style={{
    backgroundColor:'black',
    color:'pink'
}}>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
</ul>
    </>
)
}
export default Todo