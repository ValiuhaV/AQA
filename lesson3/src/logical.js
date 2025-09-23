const a = 10;
const b = 5;
const c = 7;
const d = '5';
const e = '5';
const f = true;

console.log('c < a & c > b =', (c < a) && (c > b));  //true
console.log('c < a & c < b =', (c < a) && (c < b));  //false
console.log('c < a || c < b =', (c < a) || (c < b));  //true
console.log('c > a || c < b =', (c > a) || (c < b));   //false
console.log('c > a || c < b =', (c > a) || (c < b) || f);   //true
console.log('c > a || c < b =', !(c > a) || (c < b));  //true

console.log('b == d ->', b == d); //true
console.log('b === d ->', b === d); //false
console.log('b !== d ->', b !== d);  //true
console.log('d < c ->', d < c);  //true
console.log('d >= b ->', d >= b);  //true
console.log('d === e ->', d === e);  //true
console.log('!f ->', !f);  //false
