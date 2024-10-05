import { SubTask2 } from "src/entity/subtask2-entity";
import { PrismaClient } from "@prisma/client"
import { Subtask2Repository } from "../subtask2-repository";
import { PrismaSubTask2Mappers } from "./mapper/prisma-sub-task2-mapper";



const prisma = new PrismaClient()

export class PrismaSubTask2Repository implements Subtask2Repository {


  async findById(id: string): Promise<SubTask2 | null> {
    const subTask2 = await prisma.subTask2.findUnique({
      where: {
        id
      }
    })
    if (!subTask2) {
      return null
    }

    return PrismaSubTask2Mappers.toDomain(subTask2)
  }

  async findByTaskId(taskId: string): Promise<SubTask2[] | null> {
    const task = await prisma.subTask2.findMany({
      where: {
        
      }
    })
    if (!task) {
      return null
    }

    return task.map(PrismaSubTask2Mappers.toDomain)
  }

  async findByStatus(status: string): Promise<SubTask2[] | null> {
    const task = await prisma.subTask2.findMany({
      where: {
        status
      }
    })
    if (!task) {
      return null
    }

    return task.map(PrismaSubTask2Mappers.toDomain)
  }

  async create(subTask2: SubTask2): Promise<void> {
    const data = PrismaSubTask2Mappers.toPrisma(subTask2)
    const result = await prisma.subTask2.create({
      data
    })

    if (!result) {
      throw new Error('Falha ao criar usuário !')
    }
  }

  async save(subTask2: SubTask2): Promise<void> {
    const data = PrismaSubTask2Mappers.toPrisma(subTask2)

    const result = await prisma.subTask2.update({
      where: {
        id: subTask2.id.toString()
      },
      data
    })

    if (!result) {
      throw new Error('Falha ao atualizar usuário !')
    }

  }

  async delete(id: string): Promise<void> {
    await prisma.subTask2.delete({
      where: {
        id
      }
    })
  }

}