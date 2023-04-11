import { Animal } from "./animal";

export class Gorille extends Animal {
        private weight:number;

        constructor(name:string,weight:number) {
            super(name);
            this.weight = weight;
        }

        public moves = () => {
            console.log("je marche sur 2 pattes");
        }
}