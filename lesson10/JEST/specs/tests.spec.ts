import { playWithAnimal, makeItFly } from '../src/interactions';
import { Cat, Parrot } from '../src/cat-parrot';

describe('Tests for functions', () => {
    let cat: Cat;
    let parrot: Parrot;

    beforeEach(() => {
        cat = new Cat('Lucy', 'Anton');
        parrot = new Parrot('Tosha', 'Valia');

        jest.spyOn(cat, 'makeSound');
        jest.spyOn(parrot, 'makeSound');
        jest.spyOn(parrot, 'fly');
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('Should call makeSound on Cat', () => {
        playWithAnimal(cat);
        expect(cat.makeSound).toHaveBeenCalled();
    });

    it('Should call makeSound on Parrot', () => {
        playWithAnimal(parrot);
        expect(parrot.makeSound).toHaveBeenCalled();
    });

    it('Should call fly on Parrot', () => {
        makeItFly(parrot);
        expect(parrot.fly).toHaveBeenCalled();
    });
});
