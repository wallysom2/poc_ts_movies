import { Router } from "express";
import { getAllMovies, getMovieById, createMovie } from "../controllers/movieController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { movieSchema } from "../schemas/movieSchema.js";

const movieRouter = Router();
movieRouter.get ("/movies", getAllMovies);
movieRouter.get ("/movies/:id", getMovieById);
movieRouter.post ("/movies",schemaValidator(movieSchema), createMovie);

export default movieRouter;