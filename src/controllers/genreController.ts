import { Request, Response } from 'express';
import httpStatus from 'http-status';

import genreService from '../services/genreService.js';

export function getGenreById (req: Request, res: Response) {
    const id = parseInt (req.params.id);

    try {
        const genre = await genreService.getGenreById(id);
        res.send(genre);
        
    } catch (error) {
        console.log (error)
        res.sendStatus(httpStatus.NOT_FOUND);
    }
}

