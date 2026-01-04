import * as winnerQueries from "@/db/winner.queries.js";
import type { Request, Response, NextFunction } from "express";

const getWinners = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const winners = await winnerQueries.getWinners();
        res.json(winners);
    } catch (error) {
        next(error);
    }
};

const postWinners = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const name = req.body.name;
        const winner = await winnerQueries.createWinner(name);
        res.json(winner);
    } catch (error) {
        next(error);
    }
};

export { getWinners, postWinners };
