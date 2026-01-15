import { z } from 'zod';

const giphyGifArraySchema = z.object({
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
type GiphyGif = z.infer<typeof giphyGifArraySchema>;

export { giphyGifArraySchema };
export type { GiphyGif };
