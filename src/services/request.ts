import { z } from 'zod';
import { giphyArrayschema } from '../schemas/giphy.schema';
import { apiErrorSchema } from '../schemas/apiError.schema';
import { createResponseError } from './responseError';
const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const requestGifs = async (search: string, limit = 12): Promise<z.infer<typeof giphyArrayschema>> => {
    // build url + options
    const baseURL = 'https://api.giphy.com/v1/gifs/search';
    const options = {
        api_key: `api_key=${GIPHY_API_KEY}`,
        search: `q=${search.split(' ').join('+')}`,
        limit: `limit=${limit}`,
    };
    const url = `${baseURL}?${Object.values(options).join('&')}`;
    // fetch data
    const response = await fetch(url, { mode: 'cors' });
    const json = await response.json();
    // handle response
    if (!response.ok) {
        const apiError = apiErrorSchema.parse(json);
        throw createResponseError(Number(apiError.status), apiError.name, apiError.message);
    }
    // validate response ZOD
    const parsed = giphyArrayschema.parse(json);
    return parsed;
};

export { requestGifs };
