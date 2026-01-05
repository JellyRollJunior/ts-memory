import express from "express";
import cors from "cors";
import { origin } from "@/middleware/origins.js";
import { winnersRouter } from "@/routes/winners.router.js";

const app = express();

app.use(cors({ origin: origin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/winners", winnersRouter);

export { app };
