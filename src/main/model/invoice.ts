import { Amount } from './amount'
import { ArrayNotEmpty, IsNotEmpty, ValidateNested } from 'class-validator'

export class Invoice {
    @IsNotEmpty({
        message: "First name should not be empty"
    })
    public firstName: string
    @IsNotEmpty()
    public lastName: string
    @ArrayNotEmpty()
    @ValidateNested()
    public amountLines: Amount[]

    constructor(firstName: string = '', lastName: string = '', amountLines: Amount[] = [new Amount()]){
        this.firstName = firstName
        this.lastName = lastName
        this.amountLines = amountLines
    }

    static fromJSON(input: any): Invoice {
        return new Invoice(
            input.firstname,
            input.lastname,
            input.amount ? input.amount.map(Amount.fromJSON) : [])
    }
}