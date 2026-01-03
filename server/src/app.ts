import express from "express";
import cors from "cors";
import { origin } from "./middleware/origins.js";

const app = express();

app.use(cors({ origin: origin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export { app };
