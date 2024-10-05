import { SubTask } from "src/entity/subtask-entity"


export interface SubtaskRepository {
  findById(id: string): Promise<SubTask | null>
  findByTaskId(taskId: string): Promise<SubTask[] | null>
  findByStatus(status: string): Promise<SubTask[] | null>
  create(subtask: SubTask): Promise<void>
  save(subtask: SubTask): Promise<void>
  delete(id: string): Promise<void>
}