
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
function Recipe({id,name,ingredients}){
    return(

        <div >

      <h2>{name}</h2>
       <ul>
      {ingredients.map(ingredient=>
      
      
      <li key={ingredient}>
            {ingredient}</li>
          
          
          
        )}
       </ul>
        </div>
    )
}

export default function RecipeList(){
return(
    
    
    <div>

    <h1>recipes</h1>
    {recipes.map(recipe=>
<div key={recipe.id}>
    
     {/* <Recipe
     {...recipe}
     key={recipe.id}
    
     /> */}
     <Recipe id={recipe.id} name={recipe.name} ingredients={recipe.ingredients} key={recipe.id} />.
     </div>
    )}
    </div>
    
)
}