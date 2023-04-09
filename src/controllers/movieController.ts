import { Request, Response } from 'express';
import httpStatus from 'http-status';
import movieService from '../services/movieService.js';
import { MovieInput } from '../repositories/movieRepository.js';

export async function getAllMovies(req: Request, res: Response) {
    const movies = await movieService.getAllMovies();
    console.log (movies)
    res.send (movies)
}

export async function getMovieById(req: Request, res: Response) {
    const id = parseInt (req.params.id);
    try {
        const movie = await movieService.getMovieById(id);
        res.send(movie);
    } catch (error) {
        if (error.message === "not_found") {
            res.sendStatus(httpStatus.NOT_FOUND);
        }
    }
}

export async function createMovie(req: Request, res: Response) {
    const movie = req.body as MovieInput;
    try {
        await movieService.createMovie(movie);
        res.sendStatus(httpStatus.CREATED);
    } catch (error) {
        if (error.message === "already_exists") {
            res.sendStatus(httpStatus.CONFLICT);
        }
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
       
    }   
}
