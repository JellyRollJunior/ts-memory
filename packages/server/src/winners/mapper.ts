import type { Winner } from "@prisma/client";
import type { winnerDataTransferObject } from "./dto.schema.js";

const winnerDatabaseToDataTransferObjectMapper = (
    input: Winner
): winnerDataTransferObject => {
    return {
        name: input.name,
        datetime: input.datetime.toISOString(),
    };
};

export { winnerDatabaseToDataTransferObjectMapper };
