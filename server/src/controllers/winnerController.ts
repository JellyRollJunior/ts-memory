import type { Request, Response, NextFunction } from "express";
import type { PostWinnerInput } from "@/schemas/winner.schema.js";
import * as winnerServices from "@/services/winner.service.js";

const getWinners = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const winners = await winnerServices.getWinners();
        res.json(winners);
    } catch (error) {
        next(error);
    }
};

const postWinners = async (
    req: Request<{}, {}, PostWinnerInput>,
    res: Response,
    next: NextFunction
) => {
    try {
        const name = req.body.name;
        const winner = await winnerServices.createWinner(name);
        res.json(winner);
    } catch (error) {
        next(error);
    }
};

export { getWinners, postWinners };
