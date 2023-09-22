import './App.css';
import {useEffect, useState} from 'react';
import {RecipeList} from './Recipe';
import AddRecipe from './form';
import {Link} from "react-router-dom";

function Home(){
  const [recipes, setRecipes] = useState(null);

  useEffect( () => {
    fetch("./recipe.json")
    .then( response => response.json() )
    .then(setRecipes)
    .catch(e => console.log(e.message));
  }, [])

  if (recipes == null) return;

  return (
    <div>
      <nav>
        <Link to="/add">Add Recipe</Link>
      </nav>
      <h1>Recipes</h1>
      <RecipeList recipesData={recipes} setRecipesData={setRecipes} />
    </div>
  );
}

export function Add(){
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>Add Recipe</h1>
      <h3>To add a recipe fill out the form below.</h3>
      <AddRecipe onSubmit={addRecipe} />

    </div>
  ); 
}

export function App() {
  return <Home />; 
}

export default App;