import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Card, Button } from 'react-bootstrap';

function RecipeList() {

    const [recipes, setRecipes] = useState(null);

    useEffect( () => {
        fetch("/api/recipes")
        .then( response => response.json() )
        .then((data) => setRecipes(data))
        .catch(e => console.log(e.message));
    }, []);

    if (recipes == null) return;

    return(

        <Container>
            <Row>
                <Col>
                    <h1>Welcome to My Recipe App</h1>
                    {recipes.map((recipe) => (
                    <Card key={recipe.name} >
                    <Card.Img style={{height: "30rem"}}  variant="top" src={recipe.image} />
                    <Card.Body>
                        <Card.Title>{recipe.name}</Card.Title>
                        <Card.Text>Description: {recipe.description}</Card.Text>
                        <Card.Text>Ingredients: {recipe.ingredients}</Card.Text>
                        <Card.Text>Directions: {recipe.directions}</Card.Text>
                    </Card.Body>
                    <Button onClick={() => {
                // make api call to backend to remove current recipe
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                var urlencoded = new URLSearchParams();
                urlencoded.append("recipename", recipe.name);

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
                    for (let i=0; i<recipes.length; i++){
                    if(recipes[i].name !== recipe.name){
                        deletedRecipe.push(recipes[i]);
                    }
                    setRecipes(deletedRecipe);
                }
                })
                .catch(error => console.log('error', error));
            }}>Remove Recipe</Button>
            </Card>
            ))}
            </Col>
            </Row>
            </Container>
    );
}

export default RecipeList;