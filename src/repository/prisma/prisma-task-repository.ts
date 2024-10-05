import { Task } from "src/entity/task-entity";
import { TaskRepository } from "../task-repository";
import { PrismaClient } from "@prisma/client"
import { PrismaTaskMappers } from "./mapper/prisma-task-mapper";

const prisma = new PrismaClient()

export class PrismaTaskRepository implements TaskRepository {


  async findbyId(id: string): Promise<Task | null> {
    const task = await prisma.task.findUnique({
      where: {
        id
      }
    })
    if (!task) {
      return null
    }

    return PrismaTaskMappers.toDomain(task)
  }

  async findbyUser(userId: string): Promise<Task[] | null> {
    const task = await prisma.task.findMany({
      where: {
        userId
      }
    })
    if (!task) {
      return null
    }

    return task.map(PrismaTaskMappers.toDomain)
  }

  async findbyStatus(status: string): Promise<Task[] | null> {
    const task = await prisma.task.findMany({
      where: {
        status
      }
    })
    if (!task) {
      return null
    }

    return task.map(PrismaTaskMappers.toDomain)
  }

  async create(task: Task): Promise<void> {
    const data = PrismaTaskMappers.toPrisma(task)
    const result = await prisma.task.create({
      data
    })

    if (!result) {
      throw new Error('Falha ao criar usuário !')
    }
  }

  async save(task: Task): Promise<void> {
    const data = PrismaTaskMappers.toPrisma(task)

    const result = await prisma.task.update({
      where: {
        id: task.id.toString()
      },
      data
    })

    if (!result) {
      throw new Error('Falha ao atualizar usuário !')
    }

  }

  async delete(id: string): Promise<void> {
    await prisma.task.delete({
      where: {
        id
      }
    })
  }

}