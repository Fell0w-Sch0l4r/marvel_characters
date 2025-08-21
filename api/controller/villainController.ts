import express from "express";
import Villain from "../models/villainModel"

const getVillains = async (req: express.Request, res: express.Response) => {
    try {
        const villains = await Villain.find();
        res.status(200).json({
            status: "success",
            results: villains.length,
            data: {
                villains,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        });
    }
};

const getVillain = async (req: express.Request, res: express.Response) => {
    try {
        const villain = await Villain.findOne({
            nickname: { $regex: `^${req.params.nickname}`, $options: "i" },
        });
        res.status(200).json({
            status: "success",
            data: {
                villain,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        });
    }
};

export { getVillains, getVillain };
