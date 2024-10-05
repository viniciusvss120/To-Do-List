/* eslint-disable prettier/prettier */

import { Prisma, Task as PrismaTask, } from '@prisma/client'
import { UniqueEntityId } from 'core/unique-entity-id'
import { Task } from 'src/entity/task-entity'


export class PrismaTaskMappers {
  static toDomain(raw: PrismaTask) {
    return Task.create({
      title: raw.title,
      description: raw.description,
      status: raw.status,
      userId: raw.userId,
      createdAt: raw.createdAt
    }, new UniqueEntityId(raw.id))
  }

  static toPrisma(task: Task): Prisma.TaskUncheckedCreateInput {
    return {
      id: task.id.toString(),
      title: task.title,
      description: task.description,
      status: task.status,
      userId: task.userId,
      createdAt: task.createdAt,
      updatedAt: new Date(),
    }
  }

}
