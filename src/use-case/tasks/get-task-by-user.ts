import { Task } from "src/entity/task-entity";
import { TaskRepository } from "src/repository/task-repository";

interface GetTaskRequest {
  userId: string
}

type GetTaskResponse = {
  task: Task[]
}
export class GetTaskByUserUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute({
    userId
  }:GetTaskRequest): Promise<GetTaskResponse> {
    const task = await this.taskRepository.findbyUser(userId)

    if (!task) {
      throw new Error('Task not found !')
    }

    return {
      task
    }
  }
}