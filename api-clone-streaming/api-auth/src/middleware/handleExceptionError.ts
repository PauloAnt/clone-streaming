import { Request, Response, NextFunction } from "express";
import UserException from "../exceptions/UserException.ts";

export const handleExceptionError = (
    error: Error & Partial<UserException>, 
    req: Request, 
    res: Response, 
    next: NextFunction) : void => {
        const statusCode = error.statusCode || 500;
        const message = error.message || "Ocorreu um error inesperado.";

    
        res.status(statusCode).json({
            message: message
        })
}
