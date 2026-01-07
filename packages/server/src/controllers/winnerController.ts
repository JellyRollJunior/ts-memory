import type { Request, Response, NextFunction } from "express";
import type { Winner } from "@prisma/client";
import type { PostWinnersInput } from "@/schemas/winner.schema.js";
import { winnerDataTransferObjectSchema } from "@/schemas/winner.schema.js";
import { ServerError } from "@/errors/ServerError.js";
import * as winnerServices from "@/services/winner.service.js";

const validateWinnerDto = (winner: Winner) => {
    const result = winnerDataTransferObjectSchema.safeParse(winner);
    if (!result.success) {
        throw new ServerError("Internal Server Error");
    }
    return result.data;
};

const getWinners = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const winners = await winnerServices.getWinners();
        const output = winners.map((winner) => validateWinnerDto(winner));
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
        const output = validateWinnerDto(winner);
        res.json(output);
    } catch (error) {
        next(error);
    }
};

export { getWinners, postWinners };
