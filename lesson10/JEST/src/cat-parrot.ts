import { Pet } from './pet';
import { Flyable } from './interactions';

export class Cat extends Pet {
    public constructor(name: string, owner: string) {
        super(name, owner);
    }

    public makeSound(): void {
        console.log(`${this.name} is meowing`);
    }

    public ignoreOwner(): void {
        console.log(`${this.name} is ignoring ${this.owner}`);
    }
}

export class Parrot extends Pet implements Flyable {
    public constructor(name: string, owner: string) {
        super(name, owner);
    }

    public makeSound(): void {
        console.log(`${this.name} is chirping`);
    }

    public fly(): void {
        console.log(`${this.name} is flying`);
    }
}
