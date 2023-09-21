import './App.css';
import {useEffect, useState} from 'react';
import { RecipeList  } from './RecipeList';
import { Link } from "react-router-dom";

export function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect( () => {
   fetch("./recipe.json")
   .then( response => response.json() )
   .then(setRecipes)
   .catch (e => console.log(e.message));
 }, [])

 if (recipes == null) return;

 return (
   <div>
     <nav>
       <Link to="/add"> Add Recipe </Link>
     </nav>
     <article>
       <h1>RECIPES</h1>
       <RecipeList recipes={recipes} />
     </article>
   </div>
 )
}
export default App;