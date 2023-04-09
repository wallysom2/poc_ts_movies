import genreRepository from "../repositories/genreRepository.js";
import { GenreInput } from "../models"


async function getAllGenres(): Promise<GenreInput[]> {
    const genres = await genreRepository.getGenres();
    return genres;
}

async function getGenreById(id: number): Promise<GenreInput> {
    const genre = await genreRepository.getGenreById(id);
    if (!genre) {
        throw new Error("not_found");
    }
    return genre;
}

async function createGenre (genre: GenreInput): Promise<GenreInput> {
    const existingGenre = await genreRepository.getGenreByName(genre.name);
    if (existingGenre) {
        throw new Error("already_exists");
    }
    return await genreRepository.insertGenre(genre);
}


const genreService = {
    getAllGenres,
    getGenreById,
    createGenre
};

export default genreService;