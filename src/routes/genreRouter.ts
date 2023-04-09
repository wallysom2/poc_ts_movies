import { Router } from "express";
import  { getAllGenres, getGenreById, createGenre } from "../controllers/genreController.js";


const genreRouter = Router();
genreRouter.get ("/genres", getAllGenres );
genreRouter.get ("/genres/:id", getGenreById);
genreRouter.post ("/genres", createGenre);

export default genreRouter;