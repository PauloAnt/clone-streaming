import express, { Application } from 'express';
import http from 'http-status';
import dotenv from 'dotenv';
dotenv.config();
import UserRouter from "./src/routes/UserRouter.ts";
import { handleExceptionError } from "./src/middleware/handleExceptionError.ts";
import cors from "cors";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(UserRouter);
app.use(handleExceptionError);

app.get("/status", (req, res) => {
    res.status(200).json({
        status: http.OK,
        message: "Servidor rodando com sucesso."
    })
});

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando: http://localhost:${process.env.PORT}`);
});

