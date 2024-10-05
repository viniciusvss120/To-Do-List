import { Task } from "src/entity/task-entity";
import { TaskRepository } from "src/repository/task-repository";

interface GetTaskRequest {
  status: string
}

type GetTaskResponse = {
  task: Task[]
}
export class GetTaskByStatusUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute({
    status
  }:GetTaskRequest): Promise<GetTaskResponse> {
    const task = await this.taskRepository.findbyStatus(status)

    if (!task) {
      throw new Error('Task not found !')
    }

    return {
      task
    }
  }
}