import express from "express";
import bodyParser from "body-parser";

import api from "./api";
import { restApi as config } from "../config.json";
import mongoose from "mongoose";

const server = express();

mongoose.connect(config.dbConnectionString);

server.use(bodyParser.json());

server.use("/", api);

server.listen(config.port, () => console.log(`API running on port ${config.port}`));
