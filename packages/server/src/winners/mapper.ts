import type { Winner } from "@prisma/client";
import type { winnerDto } from "@/winners/dto.schema.js"

const mapWinnerToDto = (
    input: Winner
): winnerDto => {
    return {
        name: input.name,
        datetime: input.datetime.toISOString(),
    };
};

export { mapWinnerToDto };
