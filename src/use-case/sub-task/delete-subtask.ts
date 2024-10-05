import { SubtaskRepository } from "src/repository/subtask-repository";

interface DeleteSubTaskRequest {
  id: string
}


export class DeleteSubTaskUseCase {
  constructor(private subtaskRepository: SubtaskRepository){}

  async execute({
    id

  }: DeleteSubTaskRequest) {
    const subtask = await this.subtaskRepository.findById(id)

    if (!subtask) {
      throw new Error('SubTask not found !')
    }

    await this.subtaskRepository.delete(id)
  }
}