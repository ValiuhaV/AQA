import sinon from 'ts-sinon';
import { expect } from 'chai';
import { Cat, Parrot } from '../src/cat-parrot';
import { makeItFly, playWithAnimal } from '../src/interactions';

describe('Tests for functions with sinon', () => {
    let cat: Cat;
    let parrot: Parrot;
    let consoleLogStub: sinon.SinonStub;

    beforeEach(() => {
        cat = new Cat('Lucy', 'Anton');
        parrot = new Parrot('Tosha', 'Valia');
        consoleLogStub = sinon.stub(console, 'log');
    });

    afterEach(() => {
        consoleLogStub.restore();
    });

    it('Should call makeSound() when playing with cat', () => {
        const soundSpy = sinon.spy(cat, 'makeSound');
        playWithAnimal(cat);
        expect(soundSpy.calledOnce).to.be.true;
    });

    it('Should call makeSound() when playing with parrot', () => {
        const soundSpy = sinon.spy(parrot, 'makeSound');
        playWithAnimal(parrot);
        expect(soundSpy.calledOnce).to.be.true;
    });

    it ('Should log message when playing with cat', () => {
        playWithAnimal(cat);
        expect(consoleLogStub.calledWith('Playing with Lucy')).to.be.true;
    });

    it ('Should log message when playing with parrot', () => {
        playWithAnimal(parrot);
        expect(consoleLogStub.calledWith('Playing with Tosha')).to.be.true;
    });

    it ('Should make parrot fly using makeItFly()', () => {
        const flySpy = sinon.spy(parrot, 'fly');
        makeItFly(parrot);
        expect(flySpy.calledOnce).to.be.true;
    });

    it('Should call fly() when making parrot fly', () => {
        const parrotMock = sinon.mock(parrot);
        parrotMock.expects('fly').once().returns('Tosha is flying');
        const result = parrot.fly();
        parrotMock.verify();
        expect(result).to.equal('Tosha is flying');
    });

});
