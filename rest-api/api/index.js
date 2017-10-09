import { Router } from "express";
import morgan from "morgan";

import task from "./task";

import apiValidationErrorHandler from "../middlewares/apiValidationErrorHandler";
import dbErrorsHandler from "../middlewares/dbErrorsHandler";

const router = Router();

router.use(morgan("tiny"));

router.use("/task", task);

router.use(apiValidationErrorHandler);

router.use(dbErrorsHandler);

export default router;
