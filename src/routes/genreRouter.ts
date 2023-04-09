import { Router } from "express";
import  { getAllGenres, getGenreById, createGenre } from "../controllers/genreController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { genreSchema } from "../schemas/genreSchema.js";


const genreRouter = Router();
genreRouter.get ("/genres", getAllGenres );
genreRouter.get ("/genres/:id", getGenreById);
genreRouter.post ("/genres", schemaValidator(genreSchema), createGenre);



export default genreRouter;