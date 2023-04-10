import { Request, Response } from 'express';
import httpStatus from 'http-status';
import movieService from '../services/movieService.js';
import { MovieInput } from "../models"

export async function getAllMovies(req: Request, res: Response): Promise<void> {
    const movies = await movieService.getAllMovies();
    res.send (movies)
}

export async function getMovieById(req: Request, res: Response): Promise<void> {
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

export async function createMovie(req: Request, res: Response): Promise<void>{
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

export async function deleteMovie(req: Request, res: Response): Promise<void> {
    const id = parseInt (req.params.id);
    try {
        await movieService.deleteMovie(id);
        res.sendStatus(httpStatus.OK);
    } catch (error) {
        if (error.message === "not_found") {
            res.sendStatus(httpStatus.NOT_FOUND);
        }
    }
}

export async function getMoviesByGenre(req: Request, res: Response): Promise<void> {
    const id = parseInt (req.params.id);
    try {
        const movies = await movieService.getMoviesByGenre(id);
        res.send(movies);
    } catch (error) {
        if (error.message === "not_found") {
            res.sendStatus(httpStatus.NOT_FOUND);
        }
    }
}

export async function updateMovie(req: Request, res: Response): Promise<void> {
    const id = parseInt (req.params.id);
    const movie = req.body as MovieInput;
    try {
        await movieService.updateMovie(id, movie);
        res.sendStatus(httpStatus.OK);
    } catch (error) {
        if (error.message === "not_found") {
            res.sendStatus(httpStatus.NOT_FOUND);
        }
    }
}

