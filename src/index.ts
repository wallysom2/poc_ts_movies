import express, { json } from 'express';
import "express-async-errors"
import movieRouter from './routes/movieRouter.js';
import genreRouter from './routes/genreRouter.js';

const app = express();

app.use(json());


app.use(movieRouter);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});