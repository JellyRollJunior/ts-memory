type GameState = "NONE" | "PLAYING" | "WIN" | "LOSE";

type Tile = {
    id: string;
    src: string;
    isClicked: boolean;
};

type GameData = {
  state: GameState;
  board: Tile[];
};

export type { GameState, Tile, GameData };
