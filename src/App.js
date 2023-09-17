
import './App.css';
import {useEffect, useState} from 'react';
// import { RecipeList } from './Recipes';
import { RecipeList  } from './RecipeData';
import { Link } from "react-router-dom";

let recipeData = [{
  id: 0,
  name: "Macaroni and Cheese",
  ingredients: "Macaroni, Cheese, Milk, Flour",
  directions: "Boil Macaroni. Add to casserole dish with with rest",
  description: "Rich and Creamy macaroni dish",
  image: "./images/MacaroniAndCheese.jpg"
}, {
  id: 1,
  name: "Buffalo Chicken Tacos",
  ingredients: "Chicken breast, cheese, tortillas, hot sauce, butter, salt and pepper", 
  directions: "Slow cook chicken, hot sauce, butter, salt and pepper.  Shred chicken with sauce. Place in wraps and bake", 
  description: "Little prep and a family favorite.", 
  image:"./images/BuffaloChickenTacos.jpg"

}, {
  id: 2,
  name: "Peanut Butter Cookies",
  ingredients: "Peanut Butter, sugar, egg",
  directions: "Mix all ingriendents together and bake spoon size amounts on sheet",
  description: "Easy, three ingrdient, crispy cookie", 
  image:"./images/PeanutButterCookies.jpg"
}];

export function Home() {
  const [recipes, setRecipes] = useState(null);
   useEffect( () => {
    setRecipes(recipeData)
  }, [])

  if (recipes == null) return;

  return (
    <div>
      <nav>
        <Link to="/add"> Add Recipe </Link>
      </nav>
      <article>
        <h1>RECIPES</h1>
        <RecipeList recipes={recipes}/>
      </article>
    </div>
  );
} 

export function Add(){
  return (
    <div>
      <nav>
        <Link to="/"> Home </Link>
      </nav>
      <h1>Add Recipe </h1>
      <h3>To add a recipe fill out the form below and click on ADD</h3>
    </div>
  );
}


export function App() {
    return (
      <Home />
    )
}

export default App;
