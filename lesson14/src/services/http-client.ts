import 'dotenv/config';

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

if (!BASE_URL) {
    throw new Error('Missing BASE_URL. Add it to .env');
}

if (!API_KEY) {
    throw new Error('Missing API_KEY. Add it to .env');
}

export interface HttpResponse<T> {
    status: number;
    ok: boolean;
    data: T;
}
export class HttpClient {
    private baseUrl: string;
    private defaultHeaders: Record<string, string>;

    public constructor(baseUrl: string = BASE_URL!) {
        this.baseUrl = baseUrl;
        this.defaultHeaders = {
            'x-api-key': API_KEY!,
            'Content-Type': 'application/json'
        };
    }

    public async request<T>(
        path: string,
        options: {
            method?: string;
            headers?: Record<string, string>;
            body?: unknown;
        } = {}
    ): Promise<HttpResponse<T>> {
        const { method = 'GET', headers = {}, body } = options;

        const res = await fetch(`${this.baseUrl}${path}`, {
            method,
            headers: { ...this.defaultHeaders, ...headers },
            body: body ? JSON.stringify(body) : undefined
        });
        const contentType = res.headers.get('content-type') || '';
        const data = contentType.includes('application/json') ? await res.json() : await res.text();

        return {status: res.status, ok: res.ok, data};
    }

    public get<T>(path: string): Promise<HttpResponse<T>> {
        return this.request<T>(path, { method: 'GET'});
    }

    public post<T>(path: string, body: unknown): Promise<HttpResponse<T>> {
        return this.request<T>(path, { method: 'POST', body });
    }

    public delete<T>(path: string): Promise<HttpResponse<T>> {
        return this.request<T>(path, { method: 'DELETE' });
    }
}
