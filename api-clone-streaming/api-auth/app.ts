import express from 'express';
import http from 'http-status';
import dotenv from 'dotenv';
dotenv.config();
import UserRouter from "./modules/routes/UserRouter.ts";
import handleExceptionError from "./modules/middleware/handleExceptionError.ts";

const app = express();

app.use(UserRouter);

app.use(express.json());

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

