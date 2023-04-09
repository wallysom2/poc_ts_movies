import movieRepository from '../repositories/movieRepository.js';
import { MovieInput } from "../models"

async function getAllMovies () {
    const movies = await movieRepository.getMovies();
    return movies;
}

async function getMovieById (id: number) {
    const movie = await movieRepository.getMovieById(id);

    if (!movie) {
        throw { message: "not_found" };
    }
    return movie;
}

async function createMovie (movie: MovieInput) {
    const movieExists = await movieRepository.getMovieByName(movie.title);
    if (movieExists) {
        throw { message: "already_exists" };
    }
    await movieRepository.insertMovie(movie);
}

const movieService = {
    getAllMovies,
    getMovieById,
    createMovie
};

export default movieService;