import { promises } from "dns";
import { Task } from "src/entity/task-entity";
import { TaskRepository } from "src/repository/task-repository";

interface CreateTaskRequest {
  title: string
  description: string
  status: string
  userId: string
}

type TaskResponse = {
  task: Task
}

export class CreateTaskUseCase {
  constructor(private taskRepository: TaskRepository){}

  async execute({
    title,
    description,
    status,
    userId

  }: CreateTaskRequest): Promise<TaskResponse> {
    const task = Task.create({
      title,
      description,
      status,
      userId,
      createdAt: new Date()
    })

    await this.taskRepository.create(task)

    return {
      task
    }
  }
}