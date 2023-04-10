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

async function deleteMovie (id: number) {
    const movie = await movieRepository.getMovieById(id);
    if (!movie) {
        console.log ("Movie not found service")
        throw { message: "not_found" };
    }
    await movieRepository.deleteMovie(id);
}

async function getMoviesByGenre (id: number) {
    const movies = await movieRepository.getMoviesByGenre(id);
    if (!movies) {
        throw { message: "not_found" };
    }
    return movies;
}

const movieService = {
    getAllMovies,
    getMovieById,
    createMovie,
    deleteMovie,
    getMoviesByGenre
};

export default movieService;