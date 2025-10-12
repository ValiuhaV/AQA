import { ApiObjectDto } from './api-objects.dto';

export abstract class BaseUser {
    public id: number;
    public name: string;

    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public abstract getInfo(): string;
}

export class ShortUser extends BaseUser {
    public city: string;
    public companyName: string;

    public constructor(dto: ApiObjectDto) {
        super(dto.id, dto.name);
        this.city = dto.address.city;
        this.companyName = dto.company.name;
    }

    public getInfo(): string {
        return `Користувач ${this.name} з міста ${this.city}, компанія: ${this.companyName}`;
    }
}
