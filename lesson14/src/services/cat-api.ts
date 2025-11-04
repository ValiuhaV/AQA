import { HttpClient, HttpResponse } from './http-client.js';

interface Image {
    id: string;
    url: string;
}

interface Favourite {
    id: number;
    image_id: string;
    image: Image;
}

interface Vote {
    id: number;
    image_id: string;
    image: Image;
    value: number;
}
export class CatApi {
    private http: HttpClient;

    public constructor() {
        this.http = new HttpClient();
    }

    public searchImages(limit = 1): Promise<HttpResponse<Image[]>> {
        return this.http.get<Image[]>(`/images/search?limit=${limit}`);
    }

    public createFavourite(image_id: string): Promise<HttpResponse<{ id: number}>> {
        return this.http.post<{ id: number }>('/favourites', { image_id });
    }

    public getFavourites(): Promise<HttpResponse<Favourite[]>> {
        return this.http.get<Favourite[]>('/favourites');
    }

    public createVote(image_id: string, value: number): Promise<HttpResponse<{ id: number}>> {
        return this.http.post<{ id: number }>('/votes', { image_id, value });
    }

    public getVotes(): Promise<HttpResponse<Vote[]>> {
        return this.http.get<Vote[]>('/votes');
    }

    public deleteFavourite(favouriteId: number): Promise<HttpResponse<unknown>> {
        return this.http.delete(`/favourites/${favouriteId}`);
    }
}
