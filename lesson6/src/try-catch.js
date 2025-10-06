
const useData = data => console.log('Отримані дані:', data);

const notExistedURL = 'https://jsonplaceholder';
const existedURL = 'https://jsonplaceholder.typicode.com/photos/1';

const getData = async () => {
    try {
        console.log('Спроба звернутися до сервісу 1:');
        const response = await fetch(notExistedURL);
        if (!response.ok) {
            throw new Error('Сервіс повернув помилку: ' + response.status);
        }
        const json = await response.json();
        useData(json);

    } catch (error1) {
        console.log('Сервіс 1 не відповів або повернув помилку: ', error1);

        try {
            console.log('Спроба звернутися до сервісу 2:');
            const response = await fetch(existedURL);
            if (!response.ok) {
                throw new Error('Сервіс повернув помилку: ' + response.status);
            }
            const json = await response.json();
            useData(json);

        } catch (error2) {
            console.log('Сервіс 2 не відповів або повернув помилку:', error2);
        }
    }
};

getData();
