import { SubTask } from "src/entity/subtask-entity";
import { Task } from "src/entity/task-entity";
import { SubtaskRepository } from "src/repository/subtask-repository";
import { TaskRepository } from "src/repository/task-repository";

interface CreateSubTaskRequest {
  title: string
  description: string
  status: string
  taskId: string
}

type TaskResponse = {
  subTask: SubTask
}

export class CreateSubTaskUseCase {
  constructor(private subTaskRepository: SubtaskRepository){}

  async execute({
    title,
    description,
    status,
    taskId

  }: CreateSubTaskRequest): Promise<TaskResponse> {
    const subTask = SubTask.create({
      title,
      description,
      status,
      taskId,
      createdAt: new Date()
    })

    await this.subTaskRepository.create(subTask)

    return {
      subTask
    }
  }
}