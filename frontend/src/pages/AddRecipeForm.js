import {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AddRecipeForm() {
const navigate = useNavigate();
const [newRecipe, setNewRecipe] = useState({
    name: '',
    ingredients: '',
    directions: '',
    description: '',
    image: null,
  });
  const newImage = (e) => {
    const file = e.target.files[0];
    setNewRecipe({
        ...newRecipe, 
        image: file });
  };
  const handleChange = (e) => {
    const {name, value } = e.target;
    setNewRecipe({
        ...newRecipe,
        [name]: value,    
    });
  };
    const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", newRecipe.name);
    formData.append("ingredients", newRecipe.ingredients);
    formData.append("directions", newRecipe.directions);
    formData.append("description", newRecipe.description);
    formData.append("image", newRecipe.image);

    const response = await fetch('/api/form', {
        method: 'POST',
        body: formData,
    });
    if(response.ok){
        console.log('Recipe was added.');
        setNewRecipe({
            name: '',
            ingredients: '',
            directions: '',
            description: '',
            image: null,
        });
    } else {
        console.error('Recipe could not be added.')
    }
    navigate('/');
};
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <div>
                    <label>Recipe Name: </label>
                    <input type="text" name="name" onChange={handleChange} ></input>
                </div>
                <div>
                    <label>Ingredients: </label>
                    <textarea name="ingredients" onChange={handleChange}/>
                </div>
                <div>
                    <label>Directions: </label>
                    <textarea name="directions" onChange={handleChange}/>
                </div>
                <div>
                    <label>Description: </label>
                    <textarea name="description" onChange={handleChange}/>
                </div>
                <div>
                    <label>Select Image File: </label>
                    <input type="file" name="image" accept="images/*" onChange={newImage} />
                </div>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    );
};
export default AddRecipeForm;