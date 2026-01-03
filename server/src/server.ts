import 'dotenv/config';
import { app } from "./app.js";
import { createServer } from "node:http";

const server = createServer(app);

const port = process.env.PORT;
server.listen(port);
