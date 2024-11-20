import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserException from "../exceptions/UserException";
import http from "http-status";
dotenv.config();

const checkedToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header['Authorization'].split()[1];

    if (!token){
        throw new UserException(http.UNAUTHORIZED, "Faça o login para entrar.");
    }

    jwt.verify(token, process.env.SECRET_KEY as string);

    next();
}

export default checkedToken;