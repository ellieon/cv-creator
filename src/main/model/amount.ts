export class Amount {
    constructor(
        public readonly desc: string,
        public readonly quantity: number,
        public readonly value: number) {
    }

    static fromJSON(input?: any): Amount {
        if(!input) {
            return input
        }
        return new Amount(input.desc, input.quantity, input.value)
    }
}