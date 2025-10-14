import { Cat, Parrot } from './cat-parrot';
import { playWithAnimal } from './interactions';

const cat = new Cat('Lucy', 'Anton');
const parrot = new Parrot('Tosha', 'Valia');

cat.info();
parrot.info();

cat.move();
parrot.move();

cat.ignoreOwner();
parrot.fly();

playWithAnimal(cat);
playWithAnimal(parrot);


