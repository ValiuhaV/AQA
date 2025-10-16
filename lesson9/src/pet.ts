import { Animal } from './animal';

export class Pet extends Animal {
    protected owner: string;

    public constructor(name: string, owner: string) {
        super(name);
        this.owner = owner;
    }

    public info(): void {
        console.log(`${this.name} belongs to ${this.owner}`);
    }

    public makeSound(): void {
        console.log(`${this.name} is making a sound`);
    }

}
