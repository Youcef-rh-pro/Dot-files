
const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

function Recipe(title,ingredients){
    return(
        <>
     <h2>{title}</h2>
     <ul>
       { ingredients.forEach(element=>{
           <li>element</li>
        })}
     </ul>
        </>
    
    )
}

export default function RecipeList(){
return(
    
    <>
    <div>

    <h1>recipes</h1>
    {recipes.forEach(element=>
        <Recipe
        title={element.id}
        ingredients={element.ingredients}/>
    )}
    </div>
    </>
)
}