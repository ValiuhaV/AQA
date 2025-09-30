const vegetables = ['cucumber', 'cabbage', 'potato', 'carrot']; //1 string

vegetables.forEach(item => console.log(item));

vegetables[2] = 'pumpkin';
console.log(vegetables);

vegetables.push ('potato');
console.log(vegetables);

vegetables.unshift ('corn');
console.log(vegetables);

const found = vegetables.find(veg => veg.startsWith('cu'));
console.log('Veg starts with "cu": ' + found);

const numbers = [1, 2, 3, 4, 5]; //2 number

numbers[4] = 6;
console.log(numbers);

const lastElement = numbers.pop();
console.log(lastElement, numbers);

const firstElement = numbers.shift();
console.log(firstElement, numbers);

const doubled = numbers.map(num => num * 3);
console.log(doubled);

const has8 = numbers.includes(8);
console.log(has8); //false

const fresh = [true, false, true, false, true]; //3 boolean

fresh.forEach((fresh, index) => {
    console.log(`Елемент ${index}: ${fresh}`);
});

const countTrue = fresh.filter(val => val === true).length;
console.log('Кількість true: ', countTrue);

const countFalse = fresh.filter(val => val === false).length;
console.log('Кількість false: ', countFalse);

const number = fresh.map(val => val ? 1 : 0);
console.log(number);

const reversed = fresh.map(val => !val);
console.log(reversed);

const mixed = [1, 'hi', null, false]; //4 any

mixed.forEach(item => console.log(item));

mixed.forEach(item => console.log(typeof item));

const replaced = mixed.map(item => item === null ? 'пусте значення' : item);
console.log(replaced);

const onlyStrings = replaced.filter(item => typeof item === 'string');
console.log(onlyStrings);    //'hi', 'пусте значення'

console.log(mixed.includes(true)); //false
