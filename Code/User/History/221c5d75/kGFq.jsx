

function List(prop){
    return (
       
        <ul>
            {prop.animalList.map((el)=>{
return el.startsWith('L')&& <li key={el}> {el}</li> 
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