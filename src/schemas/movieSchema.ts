import joi from 'joi';
import { MovieInput } from "../models"

export const movieSchema = joi.object<MovieInput>({
    title: joi.string().required(),
    genreId: joi.number().required()
});