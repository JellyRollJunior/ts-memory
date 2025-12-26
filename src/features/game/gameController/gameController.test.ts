import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { gameController } from '@/features/game/gameController';

describe('Game controller module', () => {
    const SRC_ARRAY = ['SRC_1', 'SRC_2', 'SRC_3'];

    it('initializes a new game correctly', () => {
        const session = gameController.initGame(SRC_ARRAY);

        expect(session.state).toBe('PLAYING');
        expect(session.board).toHaveLength(SRC_ARRAY.length);
        session.board.forEach((tile, index) => {
            expect(tile.id).toBeTypeOf('string');
            expect(tile.id.length).toBeGreaterThan(0);
            expect(tile.src).toBe(SRC_ARRAY[index]);
            expect(tile.isClicked).toBe(false);
        });
    });
});
