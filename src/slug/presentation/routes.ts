import { Router } from "express";
import { create, get, update } from "./controller";

const router = Router();

router.post("/", create);
router.get("/:slug", get);
router.patch("/:slug", update);

export default router;
