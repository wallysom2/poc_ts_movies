import prisma from "../config/database.js";
import { Movie } from "@prisma/client";

import { MovieInput } from "../models"


async function getMovies(){
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

async function getMovieById( id: number): Promise<Movie> {
 return await prisma.movie.findUnique({
        where: {id}
    });
}

async function getMovieByName( title: string): Promise<Movie> {
    return await prisma.movie.findUnique({
           where: {title}
       });
   }

async function insertMovie(movie: MovieInput): Promise<Movie> {
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