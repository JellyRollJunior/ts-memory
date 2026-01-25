import { z } from "zod";

const winnerDtoSchema = z.object({
    name: z.string(),
    datetime: z.iso.datetime(),
});
type WinnerDto = z.infer<typeof winnerDtoSchema>;

export { winnerDtoSchema };
export type { WinnerDto };
