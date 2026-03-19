import type { Request, Response } from "express";
import { PostService } from "../services/post.services.js";

const postServices = new PostService()


export class PostController {
    async getAll(req: Request, res: Response) {
        try {
            const posts = await postServices.getAll()
            res.json(posts)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const post = await postServices.findByAuthor(id)
            res.json(post)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { title, content, authorId } = req.body;
            const newPost = await postServices.create({ title, content, authorId });
            return res.status(201).json(newPost);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const { title, content, authorId } = req.body
            const post = await postServices.update(title, content, authorId, id)
            res.json(post)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const post = await postServices.delete(id)
            res.json(post)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    }

    async getByAuthor(req: Request, res: Response) {
        try {
            const post = await postServices.getByAuthor(Number(req.user))
            res.json(post)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    }
}