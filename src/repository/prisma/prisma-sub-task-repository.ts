import { SubTask } from "src/entity/subtask-entity";
import { PrismaClient } from "@prisma/client"
import { PrismaSubTaskMappers } from "./mapper/prisma-sub-task-mapper";
import { SubtaskRepository } from "../subtask-repository";

const prisma = new PrismaClient()

export class PrismaSubTaskRepository implements SubtaskRepository {


  async findById(id: string): Promise<SubTask | null> {
    const subTask = await prisma.subTask.findUnique({
      where: {
        id
      }
    })
    if (!subTask) {
      return null
    }

    return PrismaSubTaskMappers.toDomain(subTask)
  }

  async findByTaskId(taskId: string): Promise<SubTask[] | null> {
    const task = await prisma.subTask.findMany({
      where: {
        taskId
      }
    })
    if (!task) {
      return null
    }

    return task.map(PrismaSubTaskMappers.toDomain)
  }

  async findByStatus(status: string): Promise<SubTask[] | null> {
    const task = await prisma.subTask.findMany({
      where: {
        status
      }
    })
    if (!task) {
      return null
    }

    return task.map(PrismaSubTaskMappers.toDomain)
  }

  async create(subTask: SubTask): Promise<void> {
    const data = PrismaSubTaskMappers.toPrisma(subTask)
    const result = await prisma.subTask.create({
      data
    })

    if (!result) {
      throw new Error('Falha ao criar usuário !')
    }
  }

  async save(subTask: SubTask): Promise<void> {
    const data = PrismaSubTaskMappers.toPrisma(subTask)

    const result = await prisma.subTask.update({
      where: {
        id: subTask.id.toString()
      },
      data
    })

    if (!result) {
      throw new Error('Falha ao atualizar usuário !')
    }

  }

  async delete(id: string): Promise<void> {
    await prisma.subTask.delete({
      where: {
        id
      }
    })
  }

}