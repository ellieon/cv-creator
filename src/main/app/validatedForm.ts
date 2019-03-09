import { ValidationError } from 'class-validator'

export class ValidatedForm <T> {
    public model: T
    public errors: ValidationError[]

    constructor(model: T, errors: ValidationError[] = []) {
        this.model = model
        this.errors = errors
    }

    public getValidationMessageFor(property: string): string {
    }
}