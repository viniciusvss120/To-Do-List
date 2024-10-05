import { SubTask } from "src/entity/subtask-entity";
import { SubtaskRepository } from "src/repository/subtask-repository";

interface GetSubTaskRequest {
  taskId: string
}

type GetSubTaskResponse = {
  subtask: SubTask[]
}
export class GetSubTaskByTaskUseCase {
  constructor(private subtaskRepository: SubtaskRepository) {}

  async execute({
    taskId
  }:GetSubTaskRequest): Promise<GetSubTaskResponse> {
    const subtask = await this.subtaskRepository.findByTaskId(taskId)

    if (!subtask) {
      throw new Error('SubTask not found !')
    }

    return {
      subtask
    }
  }
}