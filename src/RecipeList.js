
export function RecipeList ( {recipes, deleteRecipe} ) {
    return (
        <div>
            <ul>
                {recipes.map((recipe) => (
                    <Recipe
                    key={recipe.id}
                    recipe={recipe}
                    deleteRecipe={() => deleteRecipe(recipe.id)}/>
                ))}
            </ul>
        </div>   
    )
}
function Recipe ({ recipe, deleteRecipe }) {
    return (
        <ul>
            <h3>{recipe.name}</h3>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Directions: {recipe.directions}</p>
            <p>Description: {recipe.description}</p>
            <img
            src={recipe.image}
            alt={recipe.name}
            />
            <button onClick={deleteRecipe}>Delete Recipe</button>
        </ul>
    )
}