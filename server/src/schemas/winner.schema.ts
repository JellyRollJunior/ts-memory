import { z } from "zod";

const createWinnerSchema = z.object({
    name: z.string().min(1),
});

type CreateWinnerInput = z.infer<typeof createWinnerSchema>;

export { createWinnerSchema };
export type { CreateWinnerInput };
