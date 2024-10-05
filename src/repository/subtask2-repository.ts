import { SubTask2 } from "@prisma/client"


export interface Subtask2Repository {
  findById(id: string): Promise<SubTask2 | null>
  findByTaskId(taskId: string): Promise<SubTask2[] | null>
  findByStatus(status: string): Promise<SubTask2[] | null>
  create(subtask: SubTask2): Promise<void>
  save(subtask: SubTask2): Promise<void>
  delete(id: string): Promise<void>
}