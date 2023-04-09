import joi from 'joi';
import { GenreInput } from '../services/genreService';

export const genreSchema = joi.object<GenreInput>({
    name: joi.string().required(),
});