import { SubTask2 } from "src/entity/subtask2-entity";
import { Subtask2Repository } from "src/repository/subtask2-repository";

interface CreateSubTask2Request {
  title: string
  description: string
  status: string
  subTaskId: string
}

type SubTask2Response = {
  subTask2: SubTask2
}

export class CreateSubTask2UseCase {
  constructor(private subTask2Repository: Subtask2Repository){}

  async execute({
    title,
    description,
    status,
    subTaskId

  }: CreateSubTask2Request): Promise<SubTask2Response> {
    const subTask2 = SubTask2.create({
      title,
      description,
      status,
      subTaskId,
      createdAt: new Date()
    })

    await this.subTask2Repository.create(subTask2)

    return {
      subTask2
    }
  }
}