import type { Winner } from "@prisma/client";
import type { WinnerDataTransferObject } from "@/winners/dto.schema.js"

const winnerDatabaseToDataTransferObjectMapper = (
    input: Winner
): WinnerDataTransferObject => {
    return {
        name: input.name,
        datetime: input.datetime.toISOString(),
    };
};

export { winnerDatabaseToDataTransferObjectMapper };
