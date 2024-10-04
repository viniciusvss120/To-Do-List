import { Task } from "src/entity/task-entity";
import { TaskRepository } from "src/repository/task-repository";

interface EditTaskRequest {
  id: string
  title: string
  description: string
  status: string
}

type TaskResponse = {
  task: Task
}

export class EditTaskUseCase {
  constructor(private taskRepository: TaskRepository){}

  async execute({
    id,
    title,
    description,
    status,

  }: EditTaskRequest): Promise<TaskResponse> {
    const task = await this.taskRepository.findbyId(id)

    if (!task) {
      throw new Error('Task not found !')
    }

    task.title = title
    task.description = description
    task.status = status

    await this.taskRepository.save(task)

    return {
      task
    }
  }
}