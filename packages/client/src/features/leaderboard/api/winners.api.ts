import type { Winner } from '../schemas/winner.schema.ts';
import { makeRequest } from '@/shared/api/request';
import { winnerSchema } from '../schemas/winner.schema.ts';
const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

const fetchWinners = async (): Promise<Winner[]> => {
    const PATH = '/winners';
    const endpoint = `${BASE_URL}${PATH}`;
    const json = await makeRequest(endpoint, { mode: 'cors', method: 'GET' });
    const parsed = winnerSchema.array().parse(json);
    return parsed;
};

export { fetchWinners };
