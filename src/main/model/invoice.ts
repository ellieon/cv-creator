import { Amount } from './amount'

export class Invoice {
    constructor(public readonly firstName: string, public readonly lastName: string, public readonly amountLines: Amount[]){
    }

    static fromJSON(input: any): Invoice {
        return new Invoice(
            input.firstname,
            input.lastname,
            input.amount ? input.amount.map(Amount.fromJSON) : [])
    }
}