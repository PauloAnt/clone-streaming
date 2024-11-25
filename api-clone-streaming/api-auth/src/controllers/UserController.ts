import UserService from "../services/UserService";
import { Request, Response } from 'express';

export default class UserController{
    #service: UserService

    constructor(){
        this.#service = new UserService();
    }

    async login(req : Request, res : Response){
        const user = await this.#service.login(req);

        return res.status(user.status).json(user);
    }

    async register(req : Request, res : Response){
        const user = await this.#service.register(req);

        return res.status(user.status).json(user);
    }
}