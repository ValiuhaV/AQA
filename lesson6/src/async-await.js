const useData = data => console.log('Отримані дані:', data);

const getData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments/1');
        const json = await response.json();
        useData(json);
        return json;
    } catch (error) {
        console.log('Виникла помилка:', error);
    }
};

getData();
