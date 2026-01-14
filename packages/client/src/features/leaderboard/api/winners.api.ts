import { makeRequest } from '@/shared/api/request';
const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

const fetchWinners = async () => {
    const PATH = '/winners';
    const endpoint = `${BASE_URL}${PATH}`;
    console.log(endpoint);
    const json = await makeRequest(endpoint, { mode: 'cors', method: 'GET' });
    console.log(json);
    // validate json with zod
    return json;
};

export { fetchWinners };
