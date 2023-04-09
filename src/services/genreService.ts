import { Genre } from "@prisma/client";
import genreRepository from "../repositories/genreRepository.js";

export type GenreInput = Omit<Genre, "id">;

async function getAllGenres() {
    const genres = await genreRepository.getGenres();
    return genres;
}

async function getGenreById(id: number) {
    const genre = await genreRepository.getGenreById(id);
    if (!genre) {
        throw new Error("not_found");
    }
    return genre;
}

async function createGenre (genre: GenreInput) {
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