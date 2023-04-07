import  movieRepository  from '../repositories/movieRepository';

async function getAllMovies () {
    const movies = await movieRepository.getMovies();
    return movies;
}

const movieService = {
    getAllMovies,
};

export default movieService;