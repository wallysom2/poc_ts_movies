import { Router } from "express";
import { getAllMovies, getMovieById, createMovie, getMoviesByGenre, deleteMovie} from "../controllers/movieController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { movieSchema } from "../schemas/movieSchema.js";

const movieRouter = Router();
movieRouter.get ("/movies", getAllMovies);
movieRouter.get ("/movies/:id", getMovieById);
movieRouter.post ("/movies",schemaValidator(movieSchema), createMovie);
movieRouter.delete ("/movies/:id", deleteMovie)
movieRouter.get ("/movies/genre/:id", getMoviesByGenre)

export default movieRouter;