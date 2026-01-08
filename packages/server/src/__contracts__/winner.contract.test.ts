import type { WinnerDataTransferObject as ServerWinnerDto} from '@/winners/dto.schema.js';
import type { WinnerDataTransferObject as SharedWinnerDto } from '@sailor-moon-memory/shared/winners';
import { describe, it, expectTypeOf } from 'vitest';

describe("Winner data transfer object contract", () => {
    it("enforces server DTO matches shared projection", () => {
        expectTypeOf<ServerWinnerDto>().toEqualTypeOf<SharedWinnerDto>();
    })
})