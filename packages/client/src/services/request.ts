import { z } from 'zod';
import { giphyArraySchema } from '@/schemas/giphy.schema';
import { baseErrorSchema } from '@/errors/baseError.schema';
import { createResponseError } from '@/errors/BaseError.ts';
const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const makeRequest = async (endpoint: string, options: RequestInit,) => {
    const response = await fetch(endpoint, options);
    // handle errors
    if (!response.ok) {
        const json = await response.json();
        const apiError = baseErrorSchema.parse(json);
        throw createResponseError(Number(apiError.status), apiError.name, apiError.message);
    }
    return response.json();
}

// separate this
const requestGifs = async (search: string, limit = 12): Promise<z.infer<typeof giphyArraySchema>> => {
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
        const apiError = baseErrorSchema.parse(json);
        throw createResponseError(Number(apiError.status), apiError.name, apiError.message);
    }
    // validate response ZOD
    const parsed = giphyArraySchema.parse(json);
    return parsed;
};

export { makeRequest, requestGifs };
