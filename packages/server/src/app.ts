import express from "express";
import cors from "cors";
import { origin } from "@/middleware/origins.js";
import { winnersRouter } from "@/winners/router.js";
import { errorHandler404, errorHandler } from "@/middleware/errorHandler.js";

const app = express();

app.use(cors({ origin: origin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/winners", winnersRouter);

// error handlers
app.use(/(.*)/, errorHandler404);
app.use(errorHandler);

export { app };
