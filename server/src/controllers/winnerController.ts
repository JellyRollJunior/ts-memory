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

export { getWinners };
