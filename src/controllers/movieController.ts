import movieService from '../services/movieService';

export async function getAllMovies() {
    const movies = await movieService.getAllMovies();
    return movies;
}

export async function getMovieById() {
    
}

export async function createMovie() {
        
}   

