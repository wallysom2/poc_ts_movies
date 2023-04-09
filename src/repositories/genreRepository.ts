import prisma from "../config/database.js";
import { GenreInput } from "../models"

async function getGenres(): Promise<GenreInput[]>{
    return await prisma.genre.findMany();
}

async function getGenreById( id: number): Promise<GenreInput> {
    return await prisma.genre.findFirst({
        where: {id}
    });
}

async function getGenreByName( name: string): Promise<GenreInput> {
    return await prisma.genre.findFirst({
        where: {name}
    });
}

async function insertGenre(genre: GenreInput): Promise<GenreInput> {
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

