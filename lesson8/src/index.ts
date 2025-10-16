import { getApiObjectsData } from './fetch-api';
import { ShortUserInfo } from './short-user';
import { ShortUser } from './abstraction';

async function main(): Promise<void> {
    try {
        const dto = await getApiObjectsData();

        // Трансформація через окремий клас
        const shortInfo = new ShortUserInfo(dto);
        console.log(shortInfo.getSummary());

        // Використання абстракції та наслідування
        const user = new ShortUser(dto);
        console.log(user.getInfo());

    } catch (err) {
        console.error('Сталася помилка:', err);
    }
}

main();
