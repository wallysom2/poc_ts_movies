import { Router } from "express";
import { getAllMovies, getMovieById, createMovie } from "../controllers/movieController.js";

const movieRouter = Router();
movieRouter.get ("/movies", getAllMovies);
movieRouter.get ("/movies/:id", getMovieById);
movieRouter.post ("/movies", createMovie);

export default movieRouter;