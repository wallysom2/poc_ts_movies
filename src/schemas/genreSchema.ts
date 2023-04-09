import joi from 'joi';
import { GenreInput } from "../models"

export const genreSchema = joi.object<GenreInput>({
    name: joi.string().required(),
});