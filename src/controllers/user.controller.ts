import type { Request, Response } from "express";
import { UserService } from "../services/user.services.js";

const userServices = new UserService()


export class UserController {
    async getAll(req: Request, res: Response) {
        try {
            const users = await userServices.getAll()
            res.json(users)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const user = await userServices.getById(id)
            res.json(user)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body
            const user = await userServices.create(name, email, password)
            res.json(user)
        } catch (err) {
            console.log(err)
            res.status(400).json({ error: 'Erro ao cadastrar usuários' });
        }

    }

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const { name, email, password } = req.body
            const user = await userServices.update(name, email, password, id)
            res.json(user)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const user = await userServices.delete(id)
            res.json(user)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    }
}