import type { GiphyGif } from './schema';

const giphyDtoToUrlsMapper = (input: GiphyGif) => {
    const gifArray = input.data;
    return gifArray.map((gif) => gif.images.original.url);
};

export { giphyDtoToUrlsMapper };
