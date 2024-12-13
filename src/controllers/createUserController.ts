import { Request, Response } from "express";
import { logger } from "../app/utils/logger";

export const createUserController = {
    createUser: async (req: Request, res: Response): Promise<void> => {
        try {
            const { name, email } = req.body;
            const newUser= {name, email};
            logger.info(`User created: ${JSON.stringify(newUser)}`);
            res.status(201).send(newUser);
        } catch (error) {
            logger.error(`Error creating user: ${error}`);
            res.status(500).send({ error: "Failed to create user" });
        }
    },
};
