import {  Request, Response, NextFunction  } from 'express';
import httpStatus from 'http-status';
import { ObjectSchema } from 'joi';

export default function schemaValidator(schema: ObjectSchema) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);
            next();
        } catch (error) {
            res.sendStatus(httpStatus.BAD_REQUEST);
        }
    }
}