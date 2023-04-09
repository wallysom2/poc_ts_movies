import prisma from "../config/database.js";
import { GenreInput } from "../services/genreService.js";

async function getGenres() {
    return await prisma.genre.findMany();
}

async function getGenreById( id: number) {
    return await prisma.genre.findFirst({
        where: {id}
    });
}

async function getGenreByName( name: string) {
    return await prisma.genre.findFirst({
        where: {name}
    });
}

async function insertGenre(genre: GenreInput) {
    return await prisma.genre.create({
        data: genre
    });
}

 


const genreRepository = {
    getGenres,
    getGenreById,
    getGenreByName,
    insertGenre
};

export default genreRepository;

