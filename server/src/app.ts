import express from "express";

const app = express();

// Body parser options
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export { app };
