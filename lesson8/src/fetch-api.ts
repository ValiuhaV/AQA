import { ApiObjectDto } from './api-objects.dto';

export async function getApiObjectsData(): Promise<ApiObjectDto> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
        throw new Error(`Сервіс повернув помилку: ${response.status}`);
    }
    const json = await response.json();
    return json as ApiObjectDto;
};
