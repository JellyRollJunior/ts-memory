import type { GameData, GameState, Tile } from '@/features/game/types/types.ts';

const shuffleArray = <Type>(inputArray: Type[]): Type[] => {
    const array = structuredClone(inputArray);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

const createTile = (src: string): Tile => {
    return {
        id: crypto.randomUUID(),
        src,
        isClicked: false,
    };
};

const initGame = (srcArray: string[]): GameData => {
    const tiles = [];
    for (const src of srcArray) {
        tiles.push(createTile(src));
    }
    return {
        state: 'PLAYING',
        board: tiles,
    };
};

const selectTile = (id: string, state: GameState, board: Tile[]): GameData => {
    // Return if !PLAYING or invalid ID
    if (state != 'PLAYING') return { state, board };
    const tile = board.find((tile) => tile.id == id);
    if (!tile) return { state, board };

    // Return LOSE if tile already clicked
    if (tile.isClicked) return { state: 'LOSE', board };

    const updatedBoard = board.map((tile) => {
        return tile.id === id ? { ...tile, isClicked: true } : tile;
    });
    return { state: 'PLAYING', board: updatedBoard };
};

const verifyWin = (state: GameState, board: Tile[]): GameData => {
    const updatedState =
        board.filter((tile) => tile.isClicked).length == board.length
            ? 'WIN'
            : state;
    return { state: updatedState, board };
};

const makeMove = (id: string, state: GameState, board: Tile[]): GameData => {
    const updatedData = selectTile(id, state, board);
    const winVerifiedGameData = verifyWin(updatedData.state, updatedData.board);
    return winVerifiedGameData;
};

const restartGame = (board: Tile[]): GameData => {
    const unClickedTiles = board.map((tile) => {
        tile.isClicked = false;
        return tile;
    });
    return {
        state: 'PLAYING',
        board: unClickedTiles,
    };
};

const calculateScore = (board: Tile[]): number => {
    return board.filter((tile) => tile.isClicked == true).length;
};

const gameController = {
    shuffleArray,
    initGame,
    makeMove,
    restartGame,
    calculateScore,
};

export { gameController };
