import { app } from "./app.js";
import { createServer } from "node:http";
import dotenv from "dotenv";
dotenv.config();

const server = createServer(app);

const port = process.env.PORT;
server.listen(port);
