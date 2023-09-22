import './App.css';
import {useEffect, useState} from 'react';
import {RecipeList} from './Recipe';
import {Link} from "react-router-dom";

export function Home(){
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
      <RecipeList recipesData={recipes} setRecipesData={setRecipes}/>
    </div>
  );
}

export function Add(){
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>Add Recipe</h1>
    </div>
  ); 
}

export function Form(){
  return (
    <div>
      <h2>Add Recipe Form</h2>
    </div>
  );
}

export function App() {
  return <Home />; 
}

export default App;