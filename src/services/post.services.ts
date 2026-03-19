import { prisma } from "../lib/prisma.js"
// import bcrypt from "bcrypt"

export class PostService {
    async getAll() {
        return prisma.post.findMany({
            orderBy: { id: "asc" }
        })
    }

    async findByAuthor(id: number) {
        return prisma.post.findMany({
            where: { authorId: id }
        })
    }

    async create(data: { title: string, content: string, authorId: number }) {
        return await prisma.post.create({
            data: {
                title: data.title,
                content: data.content,
                authorId: data.authorId
            }
        });
    }

    async update(title: string, content: string, authorId: number, id: number) {
        return prisma.post.update({
            where: { id },
            data: { title, content, authorId, id }
        })
    }

    async delete(id: number) {
        return prisma.post.delete({
            where: { id }
        })
    }

    async getByAuthor(id:number) {
        return await prisma.post.findMany({
            where : {authorId: id}
        })
    }
}