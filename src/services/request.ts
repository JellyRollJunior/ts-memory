import { z } from 'zod';
import { createResponseError } from './responseError';
const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const giphyArray = z.object({
    data: z.array(
        z.object({
            images: z.object({
                original: z.object({
                    url: z.string(),
                }),
            }),
        })
    ),
});

const requestGifs = async (search: string, limit = 12): Promise<z.infer<typeof giphyArray>> => {
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
        throw createResponseError(Number(json.status), json.name, json.message);
    }
    // validate response ZOD
    console.log(json);
    const parsed = giphyArray.parse(json);
    console.log(parsed);
    return parsed;
};

export { requestGifs };
