import { prisma } from "../lib/prisma.js"
import bcrypt from "bcrypt"

export class UserService {
    async getAll() {
        return prisma.users.findMany({
            orderBy: { id: "asc" }
        })
    }

    async getById(id: number) {
        return prisma.users.findUnique({
            where: { id }
        })
    }

    async create(name: string, email: string, password: string) {
        prisma.users.create({
            data: { name, email, password }
        })

        const passwordHash = await bcrypt.hash(password, 10)

        return await prisma.users.create({
            data: { name, email, password: passwordHash }
        })
    }

    async update(name: string, email: string, password: string, id: number) {
        return prisma.users.update({
            where: { id },
            data: { name, email, password }
        })
    }

    async delete(id: number) {
        return prisma.users.delete({
            where: { id }
        })
    }

    async findByEmail(email: string) {
        return prisma.users.findUnique({
            where: { email },
        })
    }
}