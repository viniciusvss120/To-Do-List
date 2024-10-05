import { SubTask2 } from "@prisma/client";
import { SubTask } from "src/entity/subtask-entity";
import { SubtaskRepository } from "src/repository/subtask-repository";
import { Subtask2Repository } from "src/repository/subtask2-repository";

interface EditSubTaskRequest {
  id: string
  title: string
  description: string
  status: string
}

type SubTaskResponse = {
  subtask: SubTask2
}

export class EditSubTask2UseCase {
  constructor(private subtask2Repository: Subtask2Repository){}

  async execute({
    id,
    title,
    description,
    status,

  }: EditSubTaskRequest): Promise<SubTaskResponse> {
    const subtask = await this.subtask2Repository.findById(id)

    if (!subtask) {
      throw new Error('SubTask not found !')
    }

    subtask.title = title
    subtask.description = description
    subtask.status = status

    await this.subtask2Repository.save(subtask)

    return {
      subtask
    }
  }
}