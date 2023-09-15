
import './App.css';
import {useEffect, useState} from 'react';
import { RecipeList } from './Recipes';

function App() {
  let recipeData = [ {name: "Tacos", ingredients: "", directions: "", description: ""}, {name: "Stew", ingredients: "", directions: "", description: ""}];

  const [recipes, setRecipes] = useState(null);

  useEffect( () => {
    setRecipes(recipeData)
  }, [])

  if (recipes == null) return;

  return (
    <div >
      <h1>Recipes!</h1>
      <RecipeList recipes={recipes}/>
    </div>
  );
}

export default App;
