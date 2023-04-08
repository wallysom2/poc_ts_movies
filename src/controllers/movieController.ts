import { Request, Response } from 'express';
import httpStatus from 'http-status';
import movieService from '../services/movieService.js';

export async function getAllMovies(req: Request, res: Response) {
    const movies = await movieService.getAllMovies();
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

    const game = req.body;
    try {
        await movieService.createMovie(game);
    } catch (error) {
        if (error.message === "already_exists") {
            res.sendStatus(httpStatus.CONFLICT);
        
        }       
    }   
}
