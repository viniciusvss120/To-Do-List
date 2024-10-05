import { SubTask } from "src/entity/subtask-entity";
import { SubtaskRepository } from "src/repository/subtask-repository";

interface GetSubTaskRequest {
  status: string
}

type GetSubTaskResponse = {
  subtask: SubTask[]
}
export class GetSubTaskByStatusUseCase {
  constructor(private subtaskRepository: SubtaskRepository) {}

  async execute({
    status
  }:GetSubTaskRequest): Promise<GetSubTaskResponse> {
    const subtask = await this.subtaskRepository.findByStatus(status)

    if (!subtask) {
      throw new Error('SubTask not found !')
    }

    return {
      subtask
    }
  }
}