import { Router } from "express";
import * as winnerController from "@/controllers/winnerController.js";

const winnerRouter = Router();

winnerRouter.get("/", winnerController.getWinners);

export { winnerRouter };
