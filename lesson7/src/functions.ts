//1

console.log('Звичайна функція:');

function sumArray(arr: (number | string)[]): number {
    let sum = 0;
    arr.forEach((element) => {
        sum += Number(element);
    });
    return sum;
}

const numbers: number[] = [1, 3, 5, 7, 9];
console.log('Сума чисел:', sumArray(numbers));

const strings: string[] = ['4', '6', '8', '12'];
console.log('Сума чисел:', sumArray(strings));

//2

console.log('Стрілкова функція:');

const sumArray2 = (arr: (number | string)[]): number => {
    let sum = 0;
    arr.forEach((Element) => {
        sum += Number(Element);
    });
    return sum;
};

const numbers2: number[] = [1, 3, 5, 7, 9];
console.log('Сума чисел:', sumArray2(numbers2));

const strings2: string[] = ['4', '6', '8', '12'];
console.log('Сума чисел:', sumArray2(strings2));
