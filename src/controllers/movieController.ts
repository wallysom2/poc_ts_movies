import { Request, Response } from 'express';
import movieService from '../services/movieService.js';

export async function getAllMovies(req: Request, res: Response) {
    const movies = await movieService.getAllMovies();
    res.send (movies)
}

export async function getMovieById() {
    
}

export async function createMovie() {
        
}   

