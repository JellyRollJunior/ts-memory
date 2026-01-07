import type { Request, Response, NextFunction } from "express";
import type { PostWinnersInput } from "@sailor-moon-memory/shared/winners"
import { omitId } from "@/utils/omitId.js";
import * as winnerServices from "@/services/winner.service.js";

const getWinners = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const winners = await winnerServices.getWinners();
        const output = winners.map((winner) => omitId(winner));
        res.json(output);
    } catch (error) {
        next(error);
    }
};

const postWinners = async (
    req: Request<{}, {}, PostWinnersInput>,
    res: Response,
    next: NextFunction
) => {
    try {
        const name = req.body.name;
        const winner = await winnerServices.createWinner(name);
        const output = omitId(winner);
        res.json(output);
    } catch (error) {
        next(error);
    }
};

export { getWinners, postWinners };
