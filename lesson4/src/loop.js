console.log('Цикл 1:'); //від 0 до 9
for (let i = 0; i <= 9; i++) {
    console.log(i);
};

console.log('Цикл 2:'); //від 100 до 0 з кроком 10
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
};

//варіанти з while

console.log('Цикл 1 (while):');  //від 0 до 9
let i = 0;
while (i <= 9) {
    console.log(i);
    i++;
};

console.log('Цикл 2 (while):');  //від 100 до 0 з кроком 10
let it = 100;
while (it >= 0) {
    console.log(it);
    it -= 10;
};

