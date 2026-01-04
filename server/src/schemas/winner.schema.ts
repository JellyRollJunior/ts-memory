import { z } from "zod";

const postWinnersInputSchema = z.object({
    name: z.string().min(1),
});

type PostWinnerInput = z.infer<typeof postWinnersInputSchema>;

export { postWinnersInputSchema };
export type { PostWinnerInput };
