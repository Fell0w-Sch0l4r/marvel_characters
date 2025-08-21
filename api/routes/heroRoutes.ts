import express from "express";
import { getHero, getHeroes } from "../controller/heroController";



const router = express.Router()

router.route('/').get(getHeroes)
router.route('/:nickname').get(getHero)

export default router;
