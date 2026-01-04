import express from "express";
import cors from "cors";
import { origin } from "./middleware/origins.js";
import { winnerRouter } from "./routers/winnerRouter.js";

const app = express();

app.use(cors({ origin: origin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/winners", winnerRouter);

export { app };
