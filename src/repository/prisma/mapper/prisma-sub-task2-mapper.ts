/* eslint-disable prettier/prettier */

import { Prisma, SubTask2 as PrismaSubtask2,} from '@prisma/client'
import { UniqueEntityId } from 'core/unique-entity-id'
import { SubTask } from 'src/entity/subtask-entity'
import { SubTask2 } from 'src/entity/subtask2-entity'


export class PrismaSubTask2Mappers {
  static toDomain(raw: PrismaSubtask2) {
    return SubTask2.create({
      title: raw.title,
      description: raw.description,
      status: raw.status,
      subTaskId: raw.subTaskId,
      createdAt: raw.createdAt
    }, new UniqueEntityId(raw.id))
  }

  static toPrisma(subTask2: SubTask2): Prisma.SubTask2UncheckedCreateInput {
    return {
      id: subTask2.id.toString(),
      title: subTask2.title,
      description: subTask2.description,
      status: subTask2.status,
      subTaskId: subTask2.subTaskId,
      createdAt: subTask2.createdAt,
      updatedAt: new Date(),
    }
  }

}
