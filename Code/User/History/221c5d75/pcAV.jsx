const animals=['lion','dog','cat','cow','Me']
const animalList = animals.map((animal)=>
<li key={animal}>{animal}</li>

)
function ListItem(prop){
    return(
        <li>{prop.animals}</li>
    )
}
function List(prop){
    return (
        <ul>
            {prop.animalList.map((el)=>{
return <ListItem key={el} animals={el}/>
            })}
        </ul>
    )
}
export default function Animals(){
return <>
<h1>love this animals</h1>
<List animalList={animals}/>
</>
}