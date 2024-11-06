import { HasFortmatter } from "../Interfaces/HasFormatter";

export class Payment implements HasFortmatter {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ) { }
    format() {
        return `${this.recipient} owes €${this.amount} for ${this.details}`;
    }
}