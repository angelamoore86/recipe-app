import express from 'express';
import bodyParser from 'body-parser';
import { db, connectToDb } from './db.js';
import multer from 'multer';

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "/images");
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

    await db.collection('recipes').insertOne({name, ingredients,
         directions, description, image });

         const recipes = await db.collection('recipes').find({}).toArray();

         if(recipes){
            res.json(recipes);
            res.status(201).json(recipe);
         }
    // if(result.insertedCount === 1){
    //     console.log("Recipe was added.");
    //     res.status(201).json(recipe);
    // } else {
    //     console.error("Could not add recipe.");
    //     res.status(500).json(recipe);
    // }
    
});

app.post('/api/removeRecipe', async (req, res) => {
    const result = await db.collection('recipes').deleteOne({name:req.body.recipename});
    const deletedRecipe = await db.collection('recipes').find({}).toArray();
    
    res.json(deletedRecipe);
});

connectToDb(() => {
    console.log("Successfully connected to database.")
    app.listen(8000, () => {
        console.log('Server is listening on port 8000');
    });
});