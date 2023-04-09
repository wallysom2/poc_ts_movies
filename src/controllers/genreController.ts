import { Request, Response } from 'express';
import httpStatus from 'http-status';

import genreService from '../services/genreService.js';
import { GenreInput } from "../services/genreService.js";

export async function getAllGenres (req: Request, res: Response) {
    const genres = await genreService.getAllGenres();
    res.send (genres)
}

export async function getGenreById (req: Request, res: Response) {
    const id = parseInt (req.params.id);

    try {
        const genre = await genreService.getGenreById(id);
        res.send(genre);
        
    } catch (error) {
        console.log (error)
        res.sendStatus(httpStatus.NOT_FOUND);
    }
}

export async function createGenre (req: Request, res: Response) {
    const genre = req.body as GenreInput;
    try {
        await genreService.createGenre(genre);
        res.sendStatus(httpStatus.CREATED);
    } catch (error) {
        console.log (error)
        res.sendStatus(httpStatus.CONFLICT);
    }
}


