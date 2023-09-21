const Recipe = ({ recipe, deleteRecipe }) => {
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
    );
};
export default Recipe;