import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { gameController } from '@/features/game/gameController';

describe('Game controller module', () => {
    const SRC_ARRAY = ['SRC_1', 'SRC_2'];
    let session = gameController.initGame(SRC_ARRAY);
    const tileOneId = session.board[0].id;

    it('initializes a new game with correct GameData', () => {
        expect(session.state).toBe('PLAYING');
        expect(session.board).toHaveLength(SRC_ARRAY.length);
        session.board.forEach((tile, index) => {
            expect(tile.id).toBeTypeOf('string');
            expect(tile.id.length).toBeGreaterThan(0);
            expect(tile.src).toBe(SRC_ARRAY[index]);
            expect(tile.isClicked).toBe(false);
        });
    });

    // session changes: tileOne clicked
    it('sets tile to clicked on making move', () => {
        session = gameController.makeMove(
            tileOneId,
            session.state,
            session.board
        );

        expect(session.board.find(tile => tile.id === tileOneId)?.isClicked).toBe(true);
    });

    it('verifies win on clicking all tiles once', () => {
        const tileTwoId = session.board[1].id;

        const newSession = gameController.makeMove(
            tileTwoId,
            session.state,
            session.board
        );

        expect(newSession.state).toBe('WIN');
    });

    // session changes: state === LOSE
    it('verifies loss when clicking the same tile twice', () => {
        session = gameController.makeMove(
            tileOneId,
            session.state,
            session.board
        );

        expect(session.state).toBe('LOSE');
    });

    // session changes: state === PLAYING
    it('restarts game with all tiles isClicked set to false', () => {
        session = gameController.restartGame(session.board);

        session.board.forEach((tile) => {
            expect(tile.isClicked).toBe(false);
        });
        expect(session.state).toBe('PLAYING');
    });
});
