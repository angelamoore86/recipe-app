

export function RecipeList (props) {
    return (
        props.recipes.map((recipe, i) => {
            return<Recipe name={recipe.name} ing={recipe.ingredients} dir={recipe.directions} desc={recipe.description} img={recipe.image}/>
        })
    
    )
}
function Recipe( recipe ){
    return (
    <div>
    <h3>{recipe.name}</h3>
    <p>Ingredients: {recipe.ing}</p>
    <p>Directions: {recipe.dir}</p>
    <p>Description: {recipe.desc}</p>
    <img
      src={recipe.img}
      alt={recipe.name}
      />
    
    </div>
    )
}