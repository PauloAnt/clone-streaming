import express from 'express';
import http from 'http-status';
import dotenv from 'dotenv';
dotenv.config();

const app = express();







app.get("/status", (req, res) => {
    res.status(200).json({
        status: http.OK,
        message: "Servidor rodando com sucesso."
    })
})
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando: http://localhost:${process.env.PORT}`);
})

