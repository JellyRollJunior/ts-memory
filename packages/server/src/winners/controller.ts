import type { Request, Response, NextFunction } from "express";
import type { PostWinnersInput } from "@/winners/input.schema.js";
import { winnerDatabaseToDataTransferObjectMapper } from "./mapper.js";
import * as winnerServices from "@/winners/service.js";

const getWinners = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const winners = await winnerServices.getWinners();
        const output = winners.map((winner) =>
            winnerDatabaseToDataTransferObjectMapper(winner)
        );
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
        const output = winnerDatabaseToDataTransferObjectMapper(winner);
        res.json(output);
    } catch (error) {
        next(error);
    }
};

export { getWinners, postWinners };
