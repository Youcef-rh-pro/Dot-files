const animals=['lion','dog','cat','cow','Me']
const animalList = animals.map((animal)=>
<li key={animal}>{animal}</li>

)

export default function Animals(){
return <>
<h1>love this animals</h1>
<ul>
    {animalList}
</ul>
</>
}