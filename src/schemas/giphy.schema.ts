import { z } from 'zod';

const giphyArrayschema = z.object({
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

export { giphyArrayschema };
