

function List(prop){
    if(!prop.animalList){
        return <h1>loading...</h1>
    }
    if(prop.animalList.length===0){
        return <h1>theres no animals</h1>
    }
    return (
       
        <ul>
            {prop.animalList.map((el)=>{
return el.startsWith('L')&& <li key={el}> {el}</li> 
            })}
        </ul>
    )
}
export default function Animals(){
     const animals = [];
return <>
<h1>love this animals</h1>
<List animalList={animals}/>
</>
}