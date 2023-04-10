import { Router } from "express";
import { getAllMovies, getMovieById, createMovie, getMoviesByGenre, deleteMovie, updateMovie} from "../controllers/movieController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { movieSchema } from "../schemas/movieSchema.js";

const movieRouter = Router();

movieRouter.get ("/movies", getAllMovies);
movieRouter.get ("/movies/:id", getMovieById);
movieRouter.get ("/movies/genre/:id", getMoviesByGenre);
movieRouter.post ("/movies",schemaValidator(movieSchema), createMovie);
movieRouter.delete ("/movies/:id", deleteMovie);
movieRouter.put ("/movies/:id", updateMovie);

export default movieRouter;