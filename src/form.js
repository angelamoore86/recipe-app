import {useState} from 'react';

export function AddRecipe( { onAdd }) {

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
    onAdd(newRecipe);
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
                    onChange={addRecipe}></input>
                </div>
                <div>
                    <label>Ingredients</label>
                    <textarea type="text" value={newRecipe.ingredients}
                    onChange={addRecipe}/>
                </div>
                <div>
                    <label>Ingredients</label>
                    <textarea value={newRecipe.ingredients}
                    onChange={addRecipe}/>
                </div>
                <div>
                    <label>Directions</label>
                    <textarea value={newRecipe.directions}
                    onChange={addRecipe}/>
                </div>
                <div>
                    <label>Description</label>
                    <textarea value={newRecipe.description}
                    onChange={addRecipe}/>
                </div>
                <div>
                    <label>Select Image File:</label>
                    <input type="file" value={newRecipe.image}
                    onChange={addRecipe}></input>
                    <input type="submit"></input>
                </div>
                <button type='submit'>Add Recipe</button>
            </form>
        </div>
    )
}
export default AddRecipe;