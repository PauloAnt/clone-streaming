import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

app.get("/status", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Servidor rodando com sucesso."
    })
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando. http://localhost:${process.env.PORT}`);
}); 