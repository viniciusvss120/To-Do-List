import { User } from "src/entity/user-entity";
import { UserRepository } from "../user-repository";
import { PrismaClient } from "@prisma/client"
import { PrismaUserMappers } from "./mapper/prisma-user-mapper";

const prisma = new PrismaClient()

export class PrismaUserRepository implements UserRepository {
  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })
    if (!user) {
      return null
    }

    return PrismaUserMappers.toDomain(user)
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })
    if (!user) {
      return null
    }

    return PrismaUserMappers.toDomain(user)
  }

  async create(user: User): Promise<void> {
    const data = PrismaUserMappers.toPrisma(user)
    const result = await prisma.user.create({
      data
    })

    if (!result) {
      throw new Error('Falha ao criar usuário !')
    }
  }

  async save(user: User): Promise<void> {
    const data = PrismaUserMappers.toPrisma(user)

    const result = await prisma.user.update({
      where: {
        id: user.id.toString()
      },
      data
    })

    if (!result) {
      throw new Error('Falha ao atualizar usuário !')
    }

  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id
      }
    })
  }

}