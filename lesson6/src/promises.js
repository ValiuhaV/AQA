const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments/1')
        .then(response => response.json())
        .then(data => useData(data))
        .catch(error => console.log('Виникла помилка:', error));
};
const useData = data => {
    console.log('Отримані дані:', data);
};

getData();
