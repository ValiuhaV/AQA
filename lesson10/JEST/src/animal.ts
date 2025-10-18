export abstract class Animal {
    public readonly name: string;

    public constructor(name: string) {
        this.name = name;
    }
    public abstract makeSound(): void;

    public move(): void {
        console.log(`${this.name} is moving`);
        this.logAction('moved');
    }

    private logAction(action: string): void {
        console.log(`${this.name} ${action}`);
    }
}
