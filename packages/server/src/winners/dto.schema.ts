import { z } from "zod";

const winnerDataTransferObjectSchema = z.object({
    name: z.string(),
    datetime: z.iso.datetime(),
});
type WinnerDataTransferObject = z.infer<typeof winnerDataTransferObjectSchema>;

export { winnerDataTransferObjectSchema };
export type { WinnerDataTransferObject };
