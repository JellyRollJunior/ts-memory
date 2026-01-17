import type { Winner } from '@/features/leaderboard/types.ts';
import { makeRequest } from '@/shared/api/request.ts';
import { winnerDtoSchema } from '@/features/leaderboard/schemas/winnerDto.schema.ts';
import { winnerDtoToWinnerMapper } from '@/features/leaderboard/mapper.ts';
const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

const fetchWinners = async (): Promise<Winner[]> => {
    const PATH = '/winners';
    const endpoint = `${BASE_URL}${PATH}`;
    const json = await makeRequest(endpoint, { mode: 'cors', method: 'GET' });
    const parsed = winnerDtoSchema.array().parse(json);
    const formatted = parsed.map((winner) => winnerDtoToWinnerMapper(winner));
    return formatted;
};

const postWinners = async (name: string): Promise<Winner> => {
    const PATH = '/winners';
    const endpoint = `${BASE_URL}${PATH}`;
    const json = await makeRequest(endpoint, {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
        }),
    });
    const parsed = winnerDtoSchema.parse(json);
    const formatted = winnerDtoToWinnerMapper(parsed);
    return formatted;
};

export { fetchWinners, postWinners };
