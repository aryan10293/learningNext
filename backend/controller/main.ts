// import dotenv from "dotenv";
// dotenv.config({ path: "./config/.env" });

import { Request, Response } from "express";
// import pool from "../config/neon";
// import verifyPassword from "../config/verfiyPassword";
// import jwt from "../config/jwt";
import validator from "validator";

const auth = {
    doesThisWork: async (req: Request, res: Response) => {
        try {
            res.status(200).json({ message: "Hello from the main controller!" });
        } catch (error) {
            console.error("Error in main controller:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
};
export default auth;