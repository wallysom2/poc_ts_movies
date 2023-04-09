import { Request, Response } from 'express';
import httpStatus from 'http-status';

import genreService from '../services/genreService.js';
import { GenreInput } from "../services/genreService.js";

export function getAllGenres (req: Request, res: Response) {
    const genres = genreService.getAllGenres();
    res.send (genres)
}

export function getGenreById (req: Request, res: Response) {
    const id = parseInt (req.params.id);

    try {
        const genre =  genreService.getGenreById(id);
        res.send(genre);
        
    } catch (error) {
        console.log (error)
        res.sendStatus(httpStatus.NOT_FOUND);
    }
}

export function createGenre (req: Request, res: Response) {
    const genre = req.body as GenreInput;
    try {
        genreService.createGenre(genre);
        res.sendStatus(httpStatus.CREATED);
    } catch (error) {
        console.log (error)
        res.sendStatus(httpStatus.CONFLICT);
    }
}

