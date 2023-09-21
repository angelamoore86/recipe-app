import {useState} from 'react';

function AddRecipe( { onAdd }) {

const [newRecipe, setNewRecipe] = useState({
    id: "",
    name: "",
    ingredients: "",
    directions: "",
    description: "",
    image: "",
  });
  const addRecipe = (e) => {
  e.preventDefault();
  const {name, item} = e.target;
  setNewRecipe({ ...newRecipe, [name]: item});
  };
  const submitRecipe = (e) => {
    e.preventDefault();
    addRecipe(newRecipe);
    setNewRecipe({
        id: "",
        name: "",
        ingredients: "",
        directions: "",
        description: "",
        image: "",
    });
  };
    return (
        <div>
            <form onSubmit={submitRecipe}>
                <div>
                    <label>Recipe Name</label>
                    <input type="text" value={newRecipe.name}
                    onChange={submitRecipe}></input>
                </div>
                <div>
                    <label>Ingredients</label>
                    <textarea type="text" value={newRecipe.ingredients}
                    onChange={submitRecipe}/>
                </div>
                <div>
                    <label>Ingredients</label>
                    <textarea value={newRecipe.ingredients}
                    onChange={submitRecipe}/>
                </div>
                <div>
                    <label>Directions</label>
                    <textarea value={newRecipe.directions}
                    onChange={submitRecipe}/>
                </div>
                <div>
                    <label>Description</label>
                    <textarea value={newRecipe.description}
                    onChange={submitRecipe}/>
                </div>
                <div>
                    <label>Select Image File:</label>
                    <input type="file" value={newRecipe.image}
                    onChange={submitRecipe}></input>
                    <input type="submit"></input>
                </div>
                <button type='submit'>Add Recipe</button>
            </form>
        </div>
    )
}
export default AddRecipe;