
function ListItem(prop){
    return(
        <li >{prop.animals}</li>
    )
}
function List(prop){
    return (
       
        <ul>
            {prop.animalList.map((el)=>{
return <ListItem key={el}  animals={el}/>
            })}
        </ul>
    )
}
export default function Animals(){
     const animals = ["Lion", "Cow", "Snake", "Lizard"];
return <>
<h1>love this animals</h1>
<List animalList={animals}/>
</>
}