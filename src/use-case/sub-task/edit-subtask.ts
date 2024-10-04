import { SubTask } from "src/entity/subtask-entity";
import { SubtaskRepository } from "src/repository/subtask-repository";

interface EditSubTaskRequest {
  id: string
  title: string
  description: string
  status: string
}

type SubTaskResponse = {
  subtask: SubTask
}

export class EditSubTaskUseCase {
  constructor(private subtaskRepository: SubtaskRepository){}

  async execute({
    id,
    title,
    description,
    status,

  }: EditSubTaskRequest): Promise<SubTaskResponse> {
    const subtask = await this.subtaskRepository.findbyId(id)

    if (!subtask) {
      throw new Error('SubTask not found !')
    }

    subtask.title = title
    subtask.description = description
    subtask.status = status

    await this.subtaskRepository.save(subtask)

    return {
      subtask
    }
  }
}