 function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}
 const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];
// export default function List() {
//     const chemist= people.filter((perosn)=>perosn.profession==='chemist')
//     const others= people.filter((perosn)=>perosn.profession!==='chemist')

//     return (
//     const show = people.map(person=>{
//         person.profession==='chemist'?
//         <li key={person.id}>
// <h1>chemist</h1>
//           <img 
//           src={getImageUrl(person)}
//           alt={person.name}
//           />  
// <p>
//     <b>{person.name}:</b>
//     {' '+person.profession+' '}
//     known for {person.accomplishment}
// </p>
//         </li>
//      :       <li key={person.id}>
// <h1>other</h1>
//           <img 
//           src={getImageUrl(person)}
//           alt={person.name}
//           />  
// <p>
//     <b>{person.name}:</b>
//     {' '+person.profession+' '}
//     known for {person.accomplishment}
// </p>
//         </li>}
//     ))
const chemist=[]
const everyoneElse=[]
const profession= people.map(people=>{
  if (people.profession===chemist){
    chemist.push(people)
  }else{
    everyoneElse.push(people)
  }
})
function peopleList({title,people}){
  return(
    <>
    <h2>{title}</h2>
    <ul>
      {people.map(person=>
        <li key={person.id}>
 
         <img 
          src={getImageUrl(person)}
          alt={person.name}
          />  
<p>
    <b>{person.name}:</b>
    {' '+person.profession+' '}
    known for {person.accomplishment}
</p>
        </li>
    
      )}
    </ul>
    </>
  )
}
export default function List(){
  return(
    <article>
      <peopleList 
      title='chemist'
      people={chemist}/>
      <peopleList 
      title='everyones else'
      people={everyoneElse}/>
    </article>
  )
}