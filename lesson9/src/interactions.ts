export interface IAnimal {
    name: string;
    makeSound(): void;
}

export function playWithAnimal(animal: IAnimal): void {
    console.log(`Playing with ${animal.name}`);
    animal.makeSound();
}


