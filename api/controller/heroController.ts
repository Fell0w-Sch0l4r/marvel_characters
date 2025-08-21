import express from "express";
import HeroModel from "../models/heroModel";


const getHeroes = async (req: express.Request, res: express.Response) => {
    try {
        const heroes = await HeroModel.find()
    res.status(200).json({
        status: "success",
        results: heroes.length,
        data: {
            heroes,
        },
    });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error
        });
    }
    
};

export { getHeroes };
