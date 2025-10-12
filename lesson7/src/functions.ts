//1
console.log('Звичайна функція:');
function sumArray(arr: number[] | string[]): number | string {
    if (arr.length === 0) {
        console.log('Масив порожній, повертаємо 0');
        return 0;
    }

    let canConvertAllToNumbers = true;
    arr.forEach(el => {
        if (isNaN(Number(el))) {
            canConvertAllToNumbers = false;
        }
    });

    if (canConvertAllToNumbers) {
        let sum = 0;
        arr.forEach(num => {
            sum += Number(num);
        });
        console.log('Усі елементи числові. Сума елементів:', sum);
        return sum;
    }

    let sum = '';
    arr.forEach(num => {
        sum += String(num);
    });
    console.log('Знайдено нечислові елементи. Конкатенуємо всі елементи:', sum);
    return sum;
}

console.log('[1, 2, 3, 4]:', sumArray([1, 2, 3, 4]));
console.log('["1", "2", "3", "4"]:', sumArray(['1', '2', '3', '4']));
console.log('[]:', sumArray([]));
console.log('["a", "b", "c", "d"]:', sumArray(['a', 'b', 'c', '4']));


// 2
console.log('Стрілкова функція:');
const sumArray2 = (arr: number[] | string[]): number | string => {
    if (arr.length === 0) {
        console.log('Масив порожній, повертаємо 0');
        return 0;
    }

    let canConvertAllToNumbers = true;
    arr.forEach(
        el => {
            if (isNaN(Number(el))) {
                canConvertAllToNumbers = false;
            }
        }
    );

    if (canConvertAllToNumbers) {
        let sum = 0;
        arr.forEach(num => {
            sum += Number(num);
        });
        console.log('Усі елементи числові. Сума елементів:', sum);
        return sum;
    };
    let sum = '';
    arr.forEach(num => {
        sum += String(num);
    });
    console.log('Знайдено нечислові елементи. Конкатенуємо всі елементи:', sum);
    return sum;
};


console.log('[1, 2, 3, 4]:', sumArray2([1, 2, 3, 4]));
console.log('["1", "2", "3", "4"]:', sumArray2(['1', '2', '3', '4']));
console.log('[]:', sumArray2([]));
console.log('["a", "b", "c", "4"]:', sumArray2(['a', 'b', 'c', '4']));
