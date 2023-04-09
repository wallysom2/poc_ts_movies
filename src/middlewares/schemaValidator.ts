import {  Request, Response, NextFunction  } from 'express';
import httpStatus from 'http-status';
import { ObjectSchema } from 'joi';

export default function schemaValidator(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body);
        if (validation.error) {
            return res.status(httpStatus.UNPROCESSABLE_ENTITY)
            .send({ error: validation.error.message }) ;
        }
        next();
    }
}