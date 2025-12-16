import { Fragment, useEffect, useState } from 'react';
import type { GameState, Tile } from './types.ts';
import { GameTile } from './gameTile.tsx';

const shuffleArray = <Type,>(inputArray: Type[]): Type[] => {
  const array = structuredClone(inputArray);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

type GameData = {
  state: GameState;
  board: Tile[];
};

const createTile = (src: string): Tile => {
  return {
    id: crypto.randomUUID(),
    src,
    clicked: false,
  };
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
    board.filter((tile) => tile.clicked).length == board.length ? 'WIN' : state;
  return { state: updatedState, board };
};

const Gameboard = ({ card = 9 }) => {
  const [gameState, setGameState] = useState<GameState>('NONE');
  const [gameTiles, setGameTiles] = useState<Tile[]>([] as Tile[]);

  const fetchSrc = async (numSrc: number): Promise<string[]> => {
    let i = 0;
    return Array(numSrc)
      .fill('')
      .map((): string => '' + i++);
  };

  useEffect(() => {
    const initGameBoard = async (): Promise<void> => {
      const srcArray = await fetchSrc(card);
      const tiles = [];
      for (const src of srcArray) {
        tiles.push(createTile(src));
      }
      setGameTiles(tiles);
      setGameState('PLAYING');
    };

    initGameBoard();
  }, [card]);

  const onClickTile = (tileId: string): void => {
    if (gameState == 'PLAYING') {
      const gameData = makeMove(gameState, tileId, gameTiles);
      const winVerifiedGameData = verifyWin(gameData.state, gameData.board);
      setGameState(winVerifiedGameData.state);
      setGameTiles(winVerifiedGameData.board);
    }
  };

  return (
    <div className="max-w-3xl">
      <h1 className="mt-12 text-center text-3xl font-bold text-slate-700">
        Typescript Memory!
      </h1>
      <h2 className="text-center">{gameState}</h2>
      <ul className="mt-5 grid grid-cols-3 border border-black">
        {shuffleArray(gameTiles).map(
          (data): React.JSX.Element => (
            <Fragment key={data.id}>
              <GameTile data={data} onClick={() => onClickTile(data.id)} />
            </Fragment>
          )
        )}
      </ul>
    </div>
  );
};

export { Gameboard };
