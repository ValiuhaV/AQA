import { ApiObjectDto } from './api-objects.dto';

export class ShortUserInfo {
    public id: number;
    public name: string;
    public city: string;
    public companyName: string;

    public constructor(dto: ApiObjectDto) {
        this.id = dto.id;
        this.name = dto.name;
        this.city = dto.address.city;
        this.companyName = dto.company.name;
    }

    public getSummary(): string {
        return `${this.name} живе в ${this.city}, працює в компанії ${this.companyName}`;
    }
};
