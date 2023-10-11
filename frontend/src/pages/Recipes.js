import {Card, Button, Image } from 'react-bootstrap';

export function RecipeList ( {recipesData, setRecipesData} ) {
    return (
        recipesData.map((recipeData, i) => {
            return <Recipe name={recipeData.name} ingredients={recipeData.ingredients}
                        description={recipeData.description} directions={recipeData.directions} image={recipeData.image} recipesData={recipesData} setRecipesData={setRecipesData}/>
        }) 
    )
}
function Recipe( { name, ingredients, description, directions, image, recipesData, setRecipesData} ) {
    return (
        <Card style={{ width: '36rem' }}>
            <Card.Img as={Image} style={{height:'25rem'}} variant='top' src={`http://localhost:8000/${image}`}/>
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Description: {description}</Card.Text>
            <Card.Text>Ingredients: {ingredients}</Card.Text>
            <Card.Text>Directions: {directions}</Card.Text>
            </Card.Body>
            <Button onClick={() => {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                var urlencoded = new URLSearchParams();
                urlencoded.append("recipename", name);

                var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
                };

                fetch("/api/removeRecipe", requestOptions)
                .then(response => response.text())
                .then(result => {
                    let deletedRecipe = [];
                    for (let i=0; i<recipesData.length; i++){
                    if(recipesData[i].name !== name){
                        deletedRecipe.push(recipesData[i]);
                    }
                    setRecipesData(deletedRecipe);
                }
                })
                .catch(error => console.log('error', error));
            }}>Remove Recipe</Button>
            </Card>
    )
}

export default RecipeList;