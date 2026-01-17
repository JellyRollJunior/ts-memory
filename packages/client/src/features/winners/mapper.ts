import type { WinnerDto } from '@/features/winners/schemas/winnerDto.schema';
import type { Winner } from '@/features/winners/types';

const winnerDtoToWinnerMapper = (dto: WinnerDto): Winner => {
    return {
        name: dto.name,
        datetime: new Date(dto.datetime),
    };
};

export { winnerDtoToWinnerMapper };
