import { SubTask2 } from "src/entity/subtask2-entity"



export interface Subtask2Repository {
  findById(id: string): Promise<SubTask2 | null>
  findByTaskId(taskId: string): Promise<SubTask2[] | null>
  findByStatus(status: string): Promise<SubTask2[] | null>
  create(subTask2: SubTask2): Promise<void>
  save(subTask2: SubTask2): Promise<void>
  delete(id: string): Promise<void>
}