import express from 'express';
import bodyParser from 'body-parser';
import { db, connectToDb } from './db.js';
import multer from 'multer';


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(file.originalname);
    },
});

const upload = multer({storage});

app.get('/api/recipes', async (req, res) => {
    const recipeData = await db.collection('recipes').find({}).toArray();
    res.json(recipeData);
});

app.post('/api/form', upload.single('image'), async (req, res) => {
    const {name, ingredients, directions, description} = req.body;
    const image = req.file.filename;

    try {

    console.log("Received a POST request to /api/form");

    const addedRecipe = await db.collection('recipes').insertOne({name, ingredients,
         directions, description, image, });

         console.log("Inserting data into the database");

        if(addedRecipe.insertedCount === 1){
            console.log("Recipe was added.");
            res.status(201).json(addedRecipe.ops[0]);
        } else {
            console.error("Could not add recipe.");
            res.status(500).json({error: "Failed to add recipe"});
        }
    } catch (error) {
        console.error("Error adding recipe:", error);
        res.status(500).json({error: "Failed to add recipe"});
    }
    
});

app.post('/api/removeRecipe', async (req, res) => {
    const result = await db.collection('recipes').deleteOne({name:req.body.recipename});
    const deletedRecipe = await db.collection('recipes').find({}).toArray();
    
    res.json(deletedRecipe);
});

app.use('/images', express.static('images'));

connectToDb(() => {
    console.log("Successfully connected to database.")
    app.listen(8000, () => {
        console.log('Server is listening on port 8000');
    });
});