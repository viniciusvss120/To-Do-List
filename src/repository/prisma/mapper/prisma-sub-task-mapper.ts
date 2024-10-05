/* eslint-disable prettier/prettier */

import { Prisma, SubTask as PrismaSubtask} from '@prisma/client'
import { UniqueEntityId } from 'core/unique-entity-id'
import { SubTask } from 'src/entity/subtask-entity'


export class PrismaSubTaskMappers {
  static toDomain(raw: PrismaSubtask) {
    return SubTask.create({
      title: raw.title,
      description: raw.description,
      status: raw.status,
      taskId: raw.taskId,
      createdAt: raw.createdAt
    }, new UniqueEntityId(raw.id))
  }

  static toPrisma(subTask: SubTask): Prisma.SubTaskUncheckedCreateInput {
    return {
      id: subTask.id.toString(),
      title: subTask.title,
      description: subTask.description,
      status: subTask.status,
      taskId: subTask.taskId,
      createdAt: subTask.createdAt,
      updatedAt: new Date(),
    }
  }

}
