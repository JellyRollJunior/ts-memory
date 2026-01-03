import express from "express";
import cors from "cors";
import { origin } from "./middleware/origins.js";
import { getWinners } from "./db/winners.queries.js";

const app = express();

app.use(cors({ origin: origin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export { app };
