import { config } from "dotenv";
import mongoose, {Document, Schema} from "mongoose";
import { Hero } from "../types/Hero";
config();
const psswd = process.env.PASSWORD as string;

const DB: string | undefined = process.env.DATABASE?.replace("<PASSWORD>", psswd);

if (DB) {
    mongoose.connect(DB).then(() => {
        console.log("Success DB connection");
    });
} else {
    console.error("Database connection string is undefined.");
}


const villainSchema = new Schema({
    realName: {
        type: String,
        required: [true, "A villain must have a real name"],
        unique: true,
    },
    nickname: {
        type: String,
        required: [true, "A villain must have a nickname"],
    },
    description: {
        type: String,
        required: [true, "A villain must have a description"],
    },
});
const Villain = mongoose.model("Villain", villainSchema, "villains");
export default Villain;
