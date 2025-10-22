import { Animal } from './animal';

export interface Flyable {
    fly(): void;
}

export function playWithAnimal(animal: Animal): void {
    console.log(`Playing with ${animal.name}`);
    animal.makeSound();
}

export function makeItFly(flyable: Flyable): void {
    flyable.fly();
}

