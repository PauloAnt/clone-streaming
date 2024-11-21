import { Request, Response, NextFunction } from "express";
import UserException from "../exceptions/UserException.ts";

const handleExceptionError = (
    error: Error & Partial<UserException>, 
    req: Request, 
    res: Response, 
    next: NextFunction) => {
        const statusCode = error.statusCode || 500;
        const message = error.message || "Ocorreu um error inesperado.";

    return res.status(statusCode).json({
        message: message
    })
}

export default handleExceptionError;