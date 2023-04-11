"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var girafe_2 = require("./animals/girafe");
var gorille_2 = require("./animals/gorille");
var girafe_1 = new girafe_2.Girafe('toto', 275);
console.log(girafe_1);
girafe_1.moves();
var gorille_1 = new gorille_2.Gorille('titi', 375);
console.log(gorille_1);
gorille_1.moves();
var zoo = [];
zoo.push(girafe_1);
zoo.push(gorille_1);
console.log("il y a ".concat(zoo.length, " animaux dans le zoo"));
