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
  src={Person.photo} 
  alt={Person.name}
  className="photo"
/>
<ul style={Person.theme}>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
</ul>
    </>
)
}
export default Todo