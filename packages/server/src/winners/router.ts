import { Router } from "express";
import { validateBody } from "@/middleware/validate.js";
import { postWinnersInputSchema } from "@/winners/input.schema.js";
import * as winnerController from "@/winners/controller.js";

const winnersRouter = Router();

winnersRouter.get("/", winnerController.getWinners);
winnersRouter.post(
    "/",
    validateBody(postWinnersInputSchema),
    winnerController.postWinners
);

export { winnersRouter };
