import UserRepository from "../repositories/UserRepository";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserDTO from "../entities/UserDTO";
import UserData from "../entities/UserData";
import http from "http-status";
import UserException from "../exceptions/UserException";
import { Request, Response } from "express";

export default class UserService{
    #repository: UserRepository

    constructor(){
        this.#repository = new UserRepository();
    }

    async register(req){
        try{
            if (!req.body){
                throw new UserException(http.BAD_REQUEST, "Email ou senha inexistente.");
            }

            const data = req.body;
            const user : UserDTO | null = await this.#repository.register(data);

            return {
                status: http.OK,
                message: "Registrado com sucesso.",
                data: user
            }
        }
        catch(err){
            console.log(err.message);
            throw new UserException(http.BAD_REQUEST, "Ocorreu um error desconhecido. Tente novamente");
        }
    }

    async login(req: Request){

        try{
            if (!req.body){
                throw new UserException(http.BAD_REQUEST, "Email ou senha inexistente.");
            }

            const { email, password }: { email: string, password: string } = req.body;

            const data = new UserData(req.body.email, req.body.password);
            const user: UserDTO | null = await this.#repository.findByEmail(data.email);
            
            if (!user || !bcrypt.compare(password, user.getPassword())){
                throw new UserException(http.BAD_REQUEST, "Senha incorreta.");
            }


            const token = this.#generatedToken(data);

            return {
                status: http.OK,
                message: "Logado com sucesso.",
                data: {
                    ...data,
                    token: token
                }
            }
        }
        catch(err){
            console.log(err.message);
            throw new UserException(http.BAD_REQUEST, "Ocorreu um error desconhecido. Tente novamente");
        }
        
    }

    #generatedToken(data : UserData): string{

        const passwordEncrypted = bcrypt.hash(data.password, 10);
        
        const token = jwt.sign(data, process.env.SECRET_KEY as string, {
            expiresIn: "1d"
        });

        return token;
    }
}