type GameState = "NONE" | "PLAYING" | "WIN" | "LOSE";

type Tile = {
    id: string;
    src: string;
    clicked: boolean;
};

type GameData = {
  state: GameState;
  board: Tile[];
};

/* Errors */
type ResponseError = Error & {
    status: number;
    name: string;
};

export type { GameState, Tile, GameData, ResponseError };
