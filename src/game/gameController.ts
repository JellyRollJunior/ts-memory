import type { GameData, GameState, Tile } from '../types/types.ts';

const createTile = (src: string): Tile => {
    return {
        id: crypto.randomUUID(),
        src,
        clicked: false,
    };
};

// error handling later "try catch"
const fetchSrc = async (size: number): Promise<string[]> => {
    let i = 0;
    return Array(size)
        .fill('')
        .map((): string => '' + i++);
};

const initGame = async (size: number): Promise<GameData> => {
    const srcArray = await fetchSrc(size);
    const tiles = [];
    for (const src of srcArray) {
        tiles.push(createTile(src));
    }
    return {
        state: "PLAYING",
        board: tiles,
    }
};

const makeMove = (state: GameState, id: string, board: Tile[]): GameData => {
    let updatedState = state;
    let updatedBoard = board;
    if (state == 'PLAYING') {
        const tile = board.find((tile) => tile.id == id);
        if (tile && !tile.clicked) {
            tile.clicked = true;
            updatedBoard = tile
                ? [tile, ...board.filter((tile) => tile.id != id)]
                : board;
        } else if (tile && tile.clicked) {
            updatedState = 'LOSE';
        }
    }
    return {
        state: updatedState,
        board: updatedBoard,
    };
};

const verifyWin = (state: GameState, board: Tile[]): GameData => {
    const updatedState =
        board.filter((tile) => tile.clicked).length == board.length
            ? 'WIN'
            : state;
    return { state: updatedState, board };
};

const gameController = {
    initGame,
    makeMove,
    verifyWin,
};

export { gameController };
