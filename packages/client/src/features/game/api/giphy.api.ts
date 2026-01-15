import { makeRequest } from '@/shared/api/request.ts';
import { giphyGifArraySchema } from '@/features/game/schemas/giphy.schema.ts';
import { giphyDtoToUrlsMapper } from '@/features/game/mapper.ts';
const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const GIPHY_BASE_URL = 'https://api.giphy.com';

const fetchGifs = async (search: string, limit = 12): Promise<string[]> => {
    // build url + options
    const PATH = '/v1/gifs/search';
    const parameters = {
        api_key: `api_key=${GIPHY_API_KEY}`,
        search: `q=${search.split(' ').join('+')}`,
        limit: `limit=${limit}`,
    };
    const endpoint = `${GIPHY_BASE_URL}${PATH}?${Object.values(parameters).join('&')}`;
    // fetch & parse & map data
    const json = await makeRequest(endpoint, { mode: 'cors', method: 'GET' });
    const parsed = giphyGifArraySchema.parse(json);
    const formatted = giphyDtoToUrlsMapper(parsed);
    return formatted;
};

export { fetchGifs };
