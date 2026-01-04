import { Router } from "express";
import { validateBody } from "@/middleware/validate.js";
import { postWinnersInputSchema } from "@/schemas/winner.schema.js";
import * as winnerController from "@/controllers/winnerController.js";

const winnerRouter = Router();

winnerRouter.get("/", winnerController.getWinners);
winnerRouter.post(
    "/",
    validateBody(postWinnersInputSchema),
    winnerController.postWinners
);

export { winnerRouter };
