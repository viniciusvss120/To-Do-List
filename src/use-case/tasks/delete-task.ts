import { TaskRepository } from "src/repository/task-repository";

interface DeleteTaskRequest {
  id: string
}


export class DeleteTaskUseCase {
  constructor(private taskRepository: TaskRepository){}

  async execute({
    id

  }: DeleteTaskRequest) {
    console.log(id)
    const task = await this.taskRepository.findbyId(id)

    if (!task) {
      throw new Error('Task not found !')
    }

    await this.taskRepository.delete(id)
  }
}