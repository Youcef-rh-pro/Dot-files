

function List(prop){
    return(
<>
        {!prop.animalList?(
            <h1>loading...</h1>
        ):prop.animalList.length>0?(
            <ul>
            {prop.animalList.map((el)=>{
                return <li key={el}> {el}</li> 
            })}
            </ul>)
            : (
                <h1>theres no animals</h1>
                
            )
            </>
        )
        }
        export default function Animals(){
            const animals = ["cow","dog"];
            return <>
<h1>love this animals</h1>
<List animalList={animals}/>
</>
}