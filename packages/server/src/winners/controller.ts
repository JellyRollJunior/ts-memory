import type { Request, Response, NextFunction } from "express";
import type { PostWinnersInput } from "@/winners/input.schema.js";
import { mapWinnerToDto } from "./mapper.js";
import { validateDto } from "@/middleware/validate.js";
import { winnerDtoSchema } from "./dto.schema.js";
import * as winnerServices from "@/winners/service.js";

const getWinners = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const winners = await winnerServices.getWinners();

        const output = winners.map((winner) => mapWinnerToDto(winner));
        output.forEach((winner) => validateDto(winnerDtoSchema, winner));
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

        const output = mapWinnerToDto(winner);
        validateDto(winnerDtoSchema, output);
        res.json(output);
    } catch (error) {
        next(error);
    }
};

export { getWinners, postWinners };
