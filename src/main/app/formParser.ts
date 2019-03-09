import express = require('express');
import { ValidatedForm } from './validatedForm'
import { validateSync, ValidationError } from 'class-validator'
import { error } from 'util'

type Mapper<T> = (value: any) => T

export class FormParser {
    static createMiddleware<T>(mapper: Mapper<T>): express.RequestHandler {
        return (req, res, next) => {
            const object: T = mapper(req.body)
            const errors: ValidationError[]  = validateSync(object)
            res.locals.form = new ValidatedForm<T>(object, errors)
            next()
        }
    }
}
