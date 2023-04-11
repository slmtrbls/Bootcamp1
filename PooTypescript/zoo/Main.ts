import { Girafe } from "./animals/girafe";
import { Gorille } from "./animals/gorille";
import { Animal } from "./animals/animal"

let girafe_1 = new Girafe('toto',275);

console.log(girafe_1); 
girafe_1.moves();

let gorille_1 = new Gorille('titi',375);

console.log(gorille_1)
gorille_1.moves();

let zoo : Animal[] = [];

zoo.push(girafe_1);
zoo.push(gorille_1)

console.log(`il y a ${zoo.length} animaux dans le zoo`);