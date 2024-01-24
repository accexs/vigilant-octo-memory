import express from "express";
import healthRouter from "./health/routes";
import slugRouter from "./slug/presentation/routes";
import bodyParser from "body-parser";

import "dotenv/config";

const app = express();

app.use(bodyParser.json());

const router = express.Router();

router.use("/health-check", healthRouter);
router.use("/slug", slugRouter);

app.use(router);

export default app;
