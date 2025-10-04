function sumArray(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += Number(element);
    });
    return sum;
}

const numbers = [1, 3, 5, 7, 9]; //25
console.log('Сума чисел:', sumArray(numbers));

const strings = ['4', '6', '8', '12']; //30
console.log('Сума рядків:', sumArray(strings));

