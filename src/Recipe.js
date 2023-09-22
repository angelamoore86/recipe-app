export function RecipeList ( {recipesData, setRecipesData} ) {
    return (
        recipesData.map((recipeData, i) => {
            return <Recipe name={recipeData.name} ingredients={recipeData.ingredients}
                        description={recipeData.description} directions={recipeData.directions} image={recipeData.image} recipesData={recipesData} setRecipesData={setRecipesData}/>
        }) 
    )
}

function Recipe( { name, ingredients, description, directions, image, recipesData, setRecipesData } ) {
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt={name} width="300" height="300"/><br />
            <p><b>Description:</b> {description}</p>
            <p><b>Ingredients:</b> {ingredients}</p>
            <p><b>Directions:</b>  {directions}</p>
            
            <button onClick={() => {
                let deletedRecipe = [];
                for (let i=0; i<recipesData.length; i++){
                    if(recipesData[i].name !== name){
                        deletedRecipe.push(recipesData[i]);
                    }
                    setRecipesData(deletedRecipe);
                }
            }}>Remove Recipe</button>
        </div>
    )
}