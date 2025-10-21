import { Cat, Parrot } from './cat-parrot';
import { makeItFly, playWithAnimal } from './interactions';

const cat = new Cat('Lucy', 'Anton');
const parrot = new Parrot('Tosha', 'Valia');

cat.info();
parrot.info();

cat.move();
parrot.move();

cat.ignoreOwner();

playWithAnimal(cat);
playWithAnimal(parrot);

makeItFly(parrot);


