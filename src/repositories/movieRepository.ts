import prisma from "../config/database.js";
import { Movie } from "@prisma/client";

export type MovieInput = Omit<Movie, "id">;


async function getMovies() {
    return await prisma.movie.findMany({
        select: {
            id: true,
            title: true,
            Genre: {
                select: {
                    name: true
                }
            }
        }
    });
 
}

async function getMovieById( id: number) {
 return await prisma.movie.findUnique({
        where: {id}
    });
}

async function getMovieByName( title: string) {
    return await prisma.movie.findUnique({
           where: {title}
       });
   }

async function insertMovie(movie: MovieInput) {
    return await prisma.movie.create({
        data: movie
    });
}

const movieRepository = {
    getMovies,
    getMovieById,
    getMovieByName,
    insertMovie
};

export default movieRepository;