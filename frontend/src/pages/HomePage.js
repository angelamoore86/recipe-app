import { useEffect, useState } from 'react';
import { RecipeList } from './Recipes';

const HomePage = () => {

    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        loadRecipes();
    }, []);

    const loadRecipes = () => {
        fetch("/api/recipes")
        .then( response => response.json() )
        .then(setRecipes)
        .catch(e => console.log(e.message));
    };

    if (recipes === null) return  <div>Loading...</div>;

    return(
        <div>
            <h1>Recipe Home Page!</h1>
            <RecipeList key={recipes.name} recipesData={recipes} setRecipesData={setRecipes} /> 
        </div> 
    );
}

export default HomePage;