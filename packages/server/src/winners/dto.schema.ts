import { z } from "zod";

const winnerDataTransferObjectSchema = z.object({
    name: z.string(),
    datetime: z.iso.datetime(),
});
type winnerDataTransferObject = z.infer<typeof winnerDataTransferObjectSchema>;

export { winnerDataTransferObjectSchema };
export type { winnerDataTransferObject };
