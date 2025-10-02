
const sumArray2 = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        sum += Number(element);
    });
    return sum;
};

const numbers2 = [1, 3, 5, 7, 9]; //25
console.log('Сума чисел:', sumArray2(numbers2));

const strings2 = ['4', '6', '8', '12']; //30
console.log('Сума рядків:', sumArray2(strings2));
