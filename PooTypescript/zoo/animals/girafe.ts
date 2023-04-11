import { Animal } from "./animal";

export class Girafe extends Animal {
    public height: number;

    constructor(name:string, height: number) {
        super(name);
        this.height = height
    }

    public moves = () => {
        console.log("je marche sur mes quatre pattes")
    }
}