import { expect } from 'chai';
import { Cat, Parrot } from '../src/cat-parrot';

describe ('Tests for pets', () => {
    let cat: Cat;
    let parrot: Parrot;
    let originalLog: typeof console.log;
    let output: string;

    beforeEach(() => {
        cat = new Cat ('Lucy', 'Anton');
        parrot = new Parrot ('Tosha', 'Valia');

        output = '';
        originalLog = console.log;
        console.log = (msg: string) => output = msg;
    });

    afterEach(() => {
        console.log = originalLog;
    });

    describe ('Verify cat class', () => {

        it ('Should have correct name and owner', () => {
            expect (cat.name).to.equal ('Lucy').and.to.be.a ('string');
            expect ((cat as any).owner).to.equal ('Anton');
        });

        it('Should make sound', () => {
            cat.makeSound();
            expect (output).to.equal ('Lucy is meowing');
        });

        it ('Should ignore owner', () => {
            cat.ignoreOwner();
            expect (output).to.equal ('Lucy is ignoring Anton');
        });

        it ('Should move', () => {
            cat.move();
            expect (output).to.equal ('Lucy moved');
        });
    });

    describe ('Verify parrot class', () => {

        it ( 'Should have correct name and owner', () => {
            expect (parrot.name).to.equal ('Tosha').and.to.be.a ('string');
            expect ((parrot as any).owner).to.equal ('Valia');
        });

        it('Should make sound', () => {
            parrot.makeSound();
            expect (output).to.equal ('Tosha is chirping');
        });

        it ('Should fly', () => {
            parrot.fly();
            expect (output).to.equal ('Tosha is flying');
        });

        it ('Should move', () => {
            parrot.move();
            expect (output).to.equal ('Tosha moved');
        });
    });
});
