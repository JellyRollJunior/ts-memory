import { Router } from "express";
import { validateBody } from "@/middleware/validate.js";
import { postWinnersInputSchema } from "@shared/src/winners";
import * as winnerController from "@/controllers/winnerController.js";

const winnersRouter = Router();

winnersRouter.get("/", winnerController.getWinners);
winnersRouter.post(
    "/",
    validateBody(postWinnersInputSchema),
    winnerController.postWinners
);

export { winnersRouter };
