import type { Winner } from "@prisma/client";
import type { WinnerDto } from "@/winners/dto.schema.js"

const mapWinnerToDto = (
    input: Winner
): WinnerDto => {
    return {
        name: input.name,
        datetime: input.datetime.toISOString(),
    };
};

export { mapWinnerToDto };
