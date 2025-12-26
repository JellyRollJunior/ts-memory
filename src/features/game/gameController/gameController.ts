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
    let updatedState = state;
    let updatedBoard = board;
    if (state == 'PLAYING') {
        const tile = board.find((tile) => tile.id == id);
        if (tile && !tile.isClicked) {
            tile.isClicked = true;
            updatedBoard = tile
                ? [tile, ...board.filter((tile) => tile.id != id)]
                : board;
        } else if (tile && tile.isClicked) {
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
        board.filter((tile) => tile.isClicked).length == board.length
            ? 'WIN'
            : state;
    return { state: updatedState, board };
};

const makeMove = (id: string, state: GameState, board: Tile[]): GameData => {
    const { state: updatedState, board: updatedBoard } = selectTile(
        id,
        state,
        board
    );
    const winVerifiedGameData = gameController.verifyWin(
        updatedState,
        updatedBoard
    );
    return winVerifiedGameData;
};

const restartGame = (board: Tile[]): GameData => {
    const unClickedTiles = board.map((tile) => {
        tile.isClicked = false;
        return tile;
    });
    return {
        state: "PLAYING",
        board: unClickedTiles,
    }
};

const gameController = {
    shuffleArray,
    initGame,
    makeMove,
    verifyWin,
    restartGame,
};

export { gameController };
