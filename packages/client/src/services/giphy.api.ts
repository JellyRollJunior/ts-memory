import { giphyArraySchema } from '@/schemas/giphy.schema';
import { makeRequest } from './request';
const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const GIPHY_BASE_URL = 'https://api.giphy.com';

const fetchGifs = async (search: string, limit = 12) => {
    // build url + options
    const PATH = '/v1/gifs/search';
    const parameters = {
        api_key: `api_key=${GIPHY_API_KEY}`,
        search: `q=${search.split(' ').join('+')}`,
        limit: `limit=${limit}`,
    };
    const endpoint = `${GIPHY_BASE_URL}${PATH}?${Object.values(parameters).join('&')}`;
    // fetch & parse data
    const json = await makeRequest(endpoint, { mode: 'cors', method: 'GET' });
    const parsed = giphyArraySchema.parse(json);
    return parsed;
};

export { fetchGifs };
