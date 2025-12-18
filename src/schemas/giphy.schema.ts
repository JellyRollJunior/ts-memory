import { z } from 'zod';

/* parse array of gif URLs */
const giphyArrayschema = z
    .object({
        data: z.array(
            z.object({
                images: z.object({
                    original: z.object({
                        url: z.string(),
                    }),
                }),
            })
        ),
    })
    .transform((response) =>
        response.data.map((gif) => gif.images.original.url)
    );

export { giphyArrayschema };
