import express from "express";
import { getHeroes } from "../controller/heroController";



const router = express.Router()
//Midleware
//router.param("id", checkID);

//Routes
// router.route("/:id").get(getTour).delete(deleteTour).patch(updateTour);
// router.route("/").get(getAllTours).post(addTour);
router.route('/').get(getHeroes)

export default router;
