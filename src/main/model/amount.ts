import { IsNotEmpty, Min } from 'class-validator'

export class Amount {
    @IsNotEmpty()
    public readonly desc: string
    public readonly quantity: number
    public readonly value: number
    constructor(
        desc: string = '',
        quantity: number = 0,
        value: number = 0) {
        this.desc = desc
        this.quantity = quantity
        this.value = value
    }

    static fromJSON(input?: any): Amount {
        if(!input) {
            return input
        }
        return new Amount(input.desc, input.quantity, input.value)
    }
}