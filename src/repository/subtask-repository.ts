import { SubTask } from "src/entity/subtask-entity"


export interface SubtaskRepository {
  findbyId(id: string): Promise<SubTask | null>
  findbyTaskId(taskId: string): Promise<SubTask[] | null>
  findbyStatus(status: string): Promise<SubTask[] | null>
  create(subtask: SubTask): Promise<void>
  save(subtask: SubTask): Promise<void>
  delete(id: string): Promise<void>
}