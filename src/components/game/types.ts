type GameState = "NONE" | "PLAYING" | "WIN" | "LOSE";

type Tile = {
    id: string;
    src: string;
    clicked: boolean;
};

export type { GameState, Tile };
