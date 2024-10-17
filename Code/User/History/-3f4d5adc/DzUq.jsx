
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
// function Ingredients(ingredient){
//     return(
//         <>
       
//             <li>{ingredient}</li>
       
//         </>
//     )
// }

// function Recipe(title,ingredients){
//     return(
//         <>
//      <h2>{title}</h2>
//      {/* <ul>
//        {ingredients.map(element=>
//           <Ingredients ingredient={element} />
//         )}
//      </ul> */}
//         </>
    
//     )
// }

export default function RecipeList(){
return(
    
    
    <div>

    <h1>recipes</h1>
    {recipes.map(recipe=>
      <h2>{recipe.name}</h2>
      
      {recipe.ingredients.map(ingredient=>
      {
        <ul>
            <li>{ingredient}</li>
        </ul>
      }
        )}
      
     
    )}
    </div>
    
)
}