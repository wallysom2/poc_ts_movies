import joi from 'joi';
import { MovieInput } from '../repositories/movieRepository';

export const movieSchema = joi.object<MovieInput>({
    title: joi.string().required(),
    genreId: joi.number().required()
});