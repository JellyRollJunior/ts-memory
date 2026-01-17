import type { WinnerDto } from '@/features/leaderboard/schemas/winnerDto.schema.ts';
import type { Winner } from '@/features/leaderboard/types.ts';

const winnerDtoToWinnerMapper = (dto: WinnerDto): Winner => {
    return {
        name: dto.name,
        datetime: new Date(dto.datetime),
    };
};

export { winnerDtoToWinnerMapper };
