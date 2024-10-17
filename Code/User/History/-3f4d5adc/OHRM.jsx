
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
       {ingredients.map(element=>{
           <li>{element}</li>
        })}
     </ul>
        </>
    
    )
}

export default function RecipeList(){
return(
    
    
    <div>

    <h1>recipes</h1>
    {recipes.map(element=>
        <Recipe
        key={element.id}
        title={element.name}
        ingredients={element.ingredients}
        />
    )}
    </div>
    
)
}