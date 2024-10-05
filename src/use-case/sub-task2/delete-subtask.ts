import { SubtaskRepository } from "src/repository/subtask-repository";
import { Subtask2Repository } from "src/repository/subtask2-repository";

interface DeleteSubTask2Request {
  id: string
}


export class DeleteSubTask2UseCase {
  constructor(private subtask2Repository: Subtask2Repository){}

  async execute({
    id

  }: DeleteSubTask2Request) {
    const subtask = await this.subtask2Repository.findById(id)

    if (!subtask) {
      throw new Error('SubTask not found !')
    }

    await this.subtask2Repository.delete(id)
  }
}