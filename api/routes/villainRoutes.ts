import express from "express";
import { getVillain, getVillains } from "../controller/villainController";

const router = express.Router();

router.route("/").get(getVillains);
router.route("/:nickname").get(getVillain);

export default router;
